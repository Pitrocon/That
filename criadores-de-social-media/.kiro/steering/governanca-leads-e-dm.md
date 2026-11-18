---
inclusion: always
description: "Governança da planilha de leads compatível com ../Context/modelo-planilha-leads.csv, personalização obrigatória na DM, prevenção de spam e marcação de dados não validados"
---

# Governança de Leads e Abordagem em DM

## 1. Esquema Obrigatório da Planilha de Leads
Toda extração, auditoria ou entrega tabular de leads deve manter compatibilidade integral com [`../Context/modelo-planilha-leads.csv`](../../Context/modelo-planilha-leads.csv), preservando exatamente estas 11 colunas na mesma ordem:

1. `ID_Lead` — Identificador sequencial único (inteiro positivo).
2. `Nicho_Ramo` — Segmento específico do negócio (ex.: `Estudio de Tatuagem`, `Musico / Banda`, `Clinica de Estetica`).
3. `Nome_Empresa_ou_Profissional` — Nome comercial ou artístico verificado.
4. `Instagram_URL` — `@handle` ou URL completa válida do perfil no Instagram.
5. `Telefone_WhatsApp` — Telefone formatado (ex.: `(11) 99999-0001`), somente se encontrado em fonte pública verificada.
6. `Email` — E-mail comercial válido, somente se encontrado em fonte pública verificada (ou vazio/`NAO_INFORMADO` se inexistente).
7. `Estilo_Visual_Sugerido` — Direção estética coerente com o perfil e o nicho (ex.: `Dark / Industrial`, `Vibrante / Moderno`, `Clean / Minimalista`).
8. `Cores_Sugeridas` — Paleta sugerida coerente com o estilo (ex.: `Preto / Vermelho / Cinza`).
9. `Estrutura_Site_Sugerida` — Arquitetura funcional recomendada (ex.: `Galeria Dinamica + Agendamento Online`).
10. `Status_Abordagem_DM` — Estados permitidos: `Pendente`, `DM_Enviada`, `Respondeu`, `Em_Qualificacao`, `Reuniao_Agendada`, `Proposta_Enviada`, `Fechado`, `Sem_Interesse`, `Opt_Out`, `Descartado`.
11. `Observacoes_Validador` — Motivo objetivo da oportunidade, evidência observada no perfil e sinalização de pendências de validação.

## 2. Personalização Obrigatória por Nicho na Abordagem DM
- **Proibido disparo genérico idêntico ("copia e cola"):** toda primeira mensagem deve conter:
  1. Nome ou referência genuína ao perfil/trabalho observado (ex.: estilo de tattoo, lançamento musical, procedimento destaque).
  2. Diagnóstico curto e respeitoso de uma oportunidade real (ex.: link quebrado na bio, falta de página de agenda/orçamento fora dos destaques, ausência no Google).
  3. Pergunta aberta ou oferta leve de valor sem anexo invasivo no primeiro contato (ex.: perguntar se faz sentido enviar uma prévia/ideia pensada para o nicho).
- **Respeite a diversidade de nicho:** não use linguagem corporativa fria com tatuadores ou músicos, nem gírias informais demais com clínicas médicas/estéticas.

## 3. Prevenção de Spam, Bloqueio e Boas Práticas de Cadência
- **Qualidade acima de volume:** priorizar leads com sinal claro de ativo comercial (postagem recente, anúncios, bio sem site ou link improvisado) em vez de listas massivas não filtradas.
- **Cadência segura para operação humana/assistida:**
  - Não enviar múltiplas mensagens seguidas na mesma conversa sem resposta (sem "textão" dividido em 6 balões).
  - Máximo de **2 follow-ups** após o primeiro contato (ex.: D+3 agregando um insight ou exemplo útil; D+7 encerramento elegante deixando a porta aberta).
  - Se o lead pedir para parar ou demonstrar desinteresse (`Opt_Out` / `Sem_Interesse`), encerrar cordialmente e registrar o status imediatamente para nunca reabordar.
- **Dados públicos e respeito:** coletar apenas dados comerciais tornados públicos pelo próprio perfil/site oficial; nunca sugerir raspagem abusiva ou automação que viole limites seguros da plataforma sem aviso explícito de risco.

## 4. Marcação Explícita de Dados Não Validados Externamente
- **Regra absoluta de honestidade factual:**
  - Dados gerados como exemplo, template ou simulação devem ser marcados explicitamente como `[EXEMPLO / RASCUNHO]` e nunca misturados com leads reais.
  - Perfis, telefones, e-mails, URLs de portfólio ou métricas de alcance/engajamento citados sem verificação direta em ferramenta real (navegador/busca verificada no turno) devem receber tag explícita: **`[NÃO VERIFICADO EXTERNAMENTE]`** em `Observacoes_Validador` ou no rodapé do documento.
  - Nunca preencher `Telefone_WhatsApp` ou `Email` com palpites para "completar coluna". Se não foi encontrado em fonte verificada, deixe em branco ou registre `NAO_ENCONTRADO` e explique em `Observacoes_Validador`.
