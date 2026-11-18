---
name: integrar-captura-leads
description: "Implementar formulários validados com Zod, CTA WhatsApp rastreável com UTM, sanitização, proteção anti-spam/rate-limit básico e payload compatível com a planilha de leads."
---

# Integrar Captura de Leads e WhatsApp Rastreável

## Entradas Esperadas
- Objetivo de conversão e campos necessários para o nicho (nome, WhatsApp, e-mail, Instagram, serviço/interesse, mensagem).
- Número de WhatsApp de destino (ou variável de ambiente `NEXT_PUBLIC_WHATSAPP_NUMBER` / seed explícito).
- Contrato da planilha de leads em `../Context/modelo-planilha-leads.csv`.

## Passo a Passo
1. **Schema Zod e Sanitização (`lib/leads.ts`):**
   - Crie `leadInputSchema` com validação de tamanho máximo, formato de telefone/WhatsApp, e-mail válido e campos opcionais (ex.: `@instagram`, serviço desejado, origem UTM).
   - Implemente função de sanitização para remover caracteres de controle e neutralizar **CSV/Sheets Formula Injection** (prefixar com `'` valores que iniciem com `=`, `+`, `-`, `@`, `\t`, `\r`).
2. **Mapeamento Compatível com a Planilha de Leads:**
   - Transforme o lead validado em payload normalizado compatível com `../Context/modelo-planilha-leads.csv`:
     - `Nicho_Ramo`
     - `Nome_Empresa_ou_Profissional`
     - `Instagram_URL`
     - `Telefone_WhatsApp`
     - `Email`
     - `Estilo_Visual_Sugerido`
     - `Cores_Sugeridas`
     - `Estrutura_Site_Sugerida`
     - `Status_Abordagem_DM` (padrão `"Capturado via Site"`)
     - `Observacoes_Validador` (resumo sanitizado + UTM/origem)
3. **Route Handler / Server Action Seguro (`app/api/leads/route.ts`):**
   - Valide JSON com `safeParse`, rejeite payloads excessivos e verifique campo honeypot silencioso.
   - Aplique rate-limit básico por IP/janela (deixe explícito em comentário quando usar store em memória para dev/instância única).
   - Encaminhe para `process.env.LEADS_WEBHOOK_URL` quando configurado (com timeout via `AbortSignal.timeout`), sem nunca expor segredos ou stack traces na resposta HTTP.
4. **UI do Formulário e CTA WhatsApp Rastreável:**
   - Associe `<label htmlFor>` a todo campo, exiba mensagens de erro claras com `aria-invalid` e `aria-live="polite"`, desabilite duplo envio durante `isSubmitting` e mostre confirmação objetiva.
   - Implemente helper `buildWhatsAppUrl({ phone, message, utmSource, utmMedium, utmCampaign })` gerando `https://wa.me/<E164>?text=<encodeURIComponent(...)>` com contexto do serviço selecionado e rastreamento UTM quando aplicável.

## Entregável
Módulo completo de captura de leads: schema Zod + sanitizador + adaptador compatível com `modelo-planilha-leads.csv`, Route Handler/Server Action protegido, componente de formulário acessível e helper de CTA WhatsApp rastreável.

## Critérios de Aceite
- Validação idêntica no cliente e no servidor via Zod, com proteção anti-spam (honeypot + rate-limit básico) e neutralização de fórmula CSV.
- Payload mapeável diretamente para as colunas de `../Context/modelo-planilha-leads.csv`.
- Nenhum segredo ou URL privada de webhook exposta no código cliente.
