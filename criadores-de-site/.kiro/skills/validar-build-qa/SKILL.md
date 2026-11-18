---
name: validar-build-qa
description: "Executar typecheck, lint, build de produção, testes unitários/E2E (Playwright quando presente) e emitir relatório factual de QA com seção explícita 'NÃO verificado'."
---

# Validar Build e Emitir Parecer Factual de QA

## Entradas Esperadas
- Código completo do site dentro de `criadores-de-site/` (ou subdiretório do projeto alvo).
- Briefing Visual do Nicho, Arquitetura Web e `../Context/contrato-handoff-site-social.md`.

## Passo a Passo
1. **Inspeção Inicial (Somente Leitura em Código-Fonte):**
   - Leia `package.json`, `tsconfig.json`, estrutura de `app/` e APIs/formulários para identificar scripts e configurações existentes.
   - Não altere código de produção da aplicação; caso encontre falhas bloqueantes, liste exatamente arquivo, linha e correção necessária para o agente responsável.
2. **Execução Real dos Comandos de Validação:**
   - Execute via `shell` e capture a saída real:
     - Typecheck (`npx tsc --noEmit` ou script equivalente)
     - Lint (`npm run lint`)
     - Build de produção (`npm run build`)
     - Testes unitários/integração (`npm test` / `vitest` / `jest` / `pytest`, quando existirem)
     - Testes E2E (`npx playwright test`, **apenas se Playwright estiver configurado e executável no ambiente**)
3. **Auditoria Estrutural e Segurança Estática:**
   - Confira rotas geradas no build, presença de `sitemap.xml`/`robots.txt`, meta tags, JSON-LD, links `wa.me`, validação server-side com Zod/Pydantic, proteção honeypot/rate-limit e ausência de segredos em código cliente (`NEXT_PUBLIC_*` ou strings literais).
   - Verifique aderência ao Briefing Visual (sem visual genérico ou Lorem Ipsum).
4. **Emissão do Relatório Factual + Pacote de Portfólio:**
   - Preencha o parecer de QA citando **apenas** comandos realmente executados e saídas observadas.
   - Se aprovado, monte também o resumo de **Pacote de Portfólio** conforme `../Context/contrato-handoff-site-social.md` para handoff à frente de Social Media.
   - Inclua **obrigatoriamente** a seção **`NÃO verificado`** listando tudo que não foi executado (ex.: inspeção visual em navegador real, Core Web Vitals em produção, webhook real externo, envio real de WhatsApp).

## Entregável
**Relatório Factual de QA e Liberação** contendo:
- Status final (`APROVADO` ou `REPROVADO COM PENDÊNCIAS`);
- Tabela de comandos executados com exit code e resumo literal da saída;
- Achados de segurança, links, SEO/a11y e fidelidade ao nicho;
- Seção obrigatória **`NÃO verificado`**;
- Pacote de Portfólio (quando aprovado) pronto para consumo por `criadores-de-social-media`.

## Critérios de Aceite
- Zero declarações falsas de teste ou validação não executada.
- Todos os comandos aplicáveis (`tsc`, `lint`, `build`, testes presentes) rodados após a última alteração do projeto.
- Seção `NÃO verificado` presente e precisa.
