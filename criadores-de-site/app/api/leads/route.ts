import { NextResponse } from "next/server";
import { leadSubmissionSchema, mapToLeadSpreadsheetRow } from "@/lib/leads-schema";
import { checkRateLimit } from "@/lib/rate-limit";

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "local";
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  const rate = checkRateLimit(clientKey, 5, 60_000);

  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Limite temporário de envios atingido. Aguarde um minuto e tente novamente.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload JSON inválido." },
      { status: 400 },
    );
  }

  const parsed = leadSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      {
        ok: false,
        error: firstIssue?.message ?? "Dados inválidos na solicitação.",
      },
      { status: 400 },
    );
  }

  const idLead = Math.floor(Date.now() / 1000);
  const row = mapToLeadSpreadsheetRow(parsed.data, idLead);

  return NextResponse.json(
    {
      ok: true,
      persistedExternally: false,
      lead: row,
    },
    { status: 201 },
  );
}
