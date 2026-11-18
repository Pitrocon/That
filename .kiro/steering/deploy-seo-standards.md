---
inclusion: fileMatch
fileMatch: "criadores-de-site/**"
description: "Regras de SEO técnico, acessibilidade, Core Web Vitals e checklist de deploy"
---

# Padrões de SEO, Acessibilidade e Deploy

- **SEO Base Obrigatório:** Título único por página, meta description, tags OpenGraph/Twitter, URL canônica, `sitemap.xml`, `robots.txt` e dados estruturados JSON-LD (`Schema.org`) adequados ao nicho local.
- **Semântica e A11y:** Hierarquia única de `<h1>`, landmarks semânticos (`header`, `main`, `nav`, `footer`), `alt` descritivo em imagens e navegação por teclado visível.
- **Release Gate:** Nenhum site segue para entrega sem build limpo, lint/typecheck zerados e registro transparente do que depende de validação manual em navegador real.
