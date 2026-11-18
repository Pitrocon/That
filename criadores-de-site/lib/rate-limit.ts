interface RateLimitBucket {
  count: number;
  resetAt: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

const buckets = new Map<string, RateLimitBucket>();

/**
 * Rate limiter em memória por chave/IP.
 * Nota: para produção multi-instância, substituir por store distribuído (ex.: Redis/Upstash).
 */
export function checkRateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000,
  now = Date.now(),
): RateLimitResult {
  if (buckets.size > 500) {
    for (const [entryKey, entry] of buckets.entries()) {
      if (entry.resetAt <= now) {
        buckets.delete(entryKey);
      }
    }
  }

  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    const fresh: RateLimitBucket = { count: 1, resetAt: now + windowMs };
    buckets.set(key, fresh);
    return {
      allowed: true,
      remaining: Math.max(0, limit - 1),
      resetAt: fresh.resetAt,
    };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: current.resetAt,
    };
  }

  current.count += 1;
  return {
    allowed: true,
    remaining: Math.max(0, limit - current.count),
    resetAt: current.resetAt,
  };
}

export function resetRateLimitStore(): void {
  buckets.clear();
}
