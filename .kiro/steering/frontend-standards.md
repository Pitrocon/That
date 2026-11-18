---
inclusion: fileMatch
fileMatch: "criadores-de-site/**"
description: "Padrões gerais de Frontend e UI para projetos de sites multi-nicho"
---

# Padrões de Frontend e UI

- **Stack padrão recomendada:** Next.js (App Router), TypeScript estrito (`strict: true`), Tailwind CSS e componentes acessíveis estilo shadcn/ui + Lucide Icons.
- **Diversidade Visual Obrigatória:** Cada nicho deve receber tokens próprios (paleta, tipografia, densidade, ritmo de seções e CTAs). Proibido reutilizar exatamente a mesma paleta e estrutura entre nichos distintos.
- **Mobile-First e Performance:** Priorizar carregamento rápido, imagens otimizadas, sem layout shift (CLS) e contraste mínimo WCAG AA.
- **Sem Dados Falsos como Produção:** Placeholders ou leads fictícios devem ser claramente marcados como exemplo/seed até validação real.
