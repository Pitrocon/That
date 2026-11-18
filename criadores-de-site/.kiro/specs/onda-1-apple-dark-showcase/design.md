# Design — Onda 1 (`criadores-de-site/`): Vitrine Apple Dark

## Tokens Semânticos Apple Dark
- Fundo principal: `#000000`
- Superfícies: `#0a0a0c`, `#121216`, `#16161b`
- Bordas: `rgba(255, 255, 255, 0.10)`
- Texto primário: `#f5f5f7` | Texto secundário: `#a1a1aa`
- Ação primária: `#0071e3` (hover `#0077ed`, texto `#ffffff`, contraste `4.68:1`)
- Acento sutil: `#e8c97a` (titânio/dourado discreto) e `#2997ff` (links/foco)

## Fluxo de Interação Cliente -> Servidor
1. Usuário navega pela vitrine (`Hero` -> `Métricas` -> `Bento Grid` -> `Seletor Multi-Nicho` -> `Processo/FAQ` -> `Captura`).
2. Ao clicar em **"Solicitar este modelo"** no `NicheShowcase`, o formulário `LeadCaptureForm` recebe automaticamente `nichoRamo`, `estiloVisualSugerido`, `coresSugeridas` e `estruturaSiteSugerida` e rola até `#orcamento`.
3. O envio aciona `POST /api/leads`, retornando a linha normalizada compatível com as 11 colunas da planilha (sem persistência externa simulada).
4. O botão secundário abre link WhatsApp construído por `buildWhatsAppUrl` com parâmetros UTM.
