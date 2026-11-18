# Contrato de Handoff: Criadores de Site <-> Criadores de Social Media

Este contrato define a troca estruturada de artefatos entre as duas pastas autônomas do ecossistema, evitando acoplamento direto entre suas skills e agentes.

## 1. Fluxo `criadores-de-social-media` -> `criadores-de-site` (Demanda & Leads)

Quando a frente de Social Media identifica um nicho com alta demanda ou qualifica leads na planilha (`Context/modelo-planilha-leads.csv`), ela entrega um **Briefing de Nicho / Lead**:

```yaml
nicho: "Estúdio de Tatuagem"
estilo_visual_sugerido: "Dark / Industrial"
cores_sugeridas: "Preto / Vermelho / Cinza"
estrutura_site_sugerida: "Galeria Dinâmica + Agendamento Online"
dores_principais:
  - "Agenda concentrada apenas no direct"
  - "Portfólio desorganizado nos destaques"
objetivo_conversao: "Agendamento de orçamento via WhatsApp e formulário"
```

**Consumidor em `criadores-de-site`:** `site-pesquisa-nichos` -> `site-arquitetura` -> `site-frontend` -> `site-design-seo` -> `site-qa`.

## 2. Fluxo `criadores-de-site` -> `criadores-de-social-media` (Prova de Portfólio)

Quando `site-qa` aprova uma entrega de site (modelo de nicho ou projeto real), a frente de Sites disponibiliza um **Pacote de Portfólio**:

- URL de preview / produção verificada (ou indicação explícita se ainda local);
- Nicho atendido, paleta, tipografia e diferenciais funcionais implementados;
- Principais ganhos técnicos (velocidade, SEO local, captura de leads mobile-first);
- Prints ou referências visuais reais (somente se gerados e verificados).

**Consumidor em `criadores-de-social-media`:** `social-estrategista` -> `social-copywriter` + `social-criativos` (estudos de caso, carrosséis "Antes e Depois") -> `social-prospeccao-sdr` (abordagem personalizada usando o modelo do nicho como demonstração).

## 3. Regra de Integridade

Nenhuma frente deve assumir como existente ou publicado um site, métrica de engajamento ou dado de contato que não tenha sido explicitamente verificado e registrado em `memory.md`.
