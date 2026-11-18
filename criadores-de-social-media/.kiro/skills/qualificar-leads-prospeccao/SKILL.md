---
name: qualificar-leads-prospeccao
description: Estruturar, enriquecer e auditar leads no padrão exato da planilha ../Context/modelo-planilha-leads.csv, validando consistência por nicho e gerando handoff para criadores-de-site quando aplicável.
---

# Qualificar e Auditar Leads de Prospecção

## Objetivo
Organizar, qualificar e auditar listas de potenciais clientes sem site (ou com presença web precária) no Instagram, mantendo conformidade estrita com o esquema de `../Context/modelo-planilha-leads.csv` e com as regras de integridade factual.

## Entradas Esperadas
- **Nicho(s) e região/perfil alvo** para prospecção ou **planilha/lista bruta de leads** para auditoria e enriquecimento.
- **Critérios comerciais do ciclo:** prioridade (ex.: negócios ativos no Instagram sem site na bio ou usando apenas agregador simples).
- **Pacote de Portfólio existente** (opcional): para priorizar leads de nichos dos quais já possuímos site modelo aprovado.

## Passo a Passo
1. **Garantir o Esquema Exato da Planilha (`../Context/modelo-planilha-leads.csv`):**
   Preservar exatamente as 11 colunas na ordem oficial:
   `ID_Lead,Nicho_Ramo,Nome_Empresa_ou_Profissional,Instagram_URL,Telefone_WhatsApp,Email,Estilo_Visual_Sugerido,Cores_Sugeridas,Estrutura_Site_Sugerida,Status_Abordagem_DM,Observacoes_Validador`
2. **Aplicar Critérios de Qualificação (ICP de Prospecção):**
   - **Sinal de atividade:** perfil comercial ativo (publicações/stories recentes ou anúncios).
   - **Oportunidade de site:** ausência de site próprio na bio, link quebrado, uso apenas de Linktree/WhatsApp sem página de apresentação, portfólio preso nos Destaques ou baixa visibilidade no Google local.
   - **Aderência estética:** recomendar `Estilo_Visual_Sugerido`, `Cores_Sugeridas` e `Estrutura_Site_Sugerida` coerentes com a identidade real do lead (nunca repetir a mesma sugestão cega para todos).
3. **Auditar Qualidade, Deduplicação e Integridade:**
   - Verificar duplicidade por `Instagram_URL` ou `Nome_Empresa_ou_Profissional`.
   - Padronizar `Instagram_URL` (`@usuario` ou `https://instagram.com/...`), `Telefone_WhatsApp` no padrão brasileiro `(DD) 9XXXX-XXXX` e `Status_Abordagem_DM` dentro dos valores permitidos (`Pendente`, `DM_Enviada`, `Respondeu`, `Em_Qualificacao`, `Reuniao_Agendada`, `Proposta_Enviada`, `Fechado`, `Sem_Interesse`, `Opt_Out`, `Descartado`).
   - **Regra anti-invenção:** nunca inventar telefone, e-mail, `@handle` ou observação não verificada. Se a lista for ilustrativa, rotular no título e em `Observacoes_Validador` como `[EXEMPLO / RASCUNHO]`. Se um lead real não teve perfil/contato checado em ferramenta ao vivo no momento, registrar `[NÃO VERIFICADO EXTERNAMENTE]` em `Observacoes_Validador`.
4. **Emitir Briefing de Nicho / Lead para `criadores-de-site` (quando houver demanda):**
   - Caso surja demanda recorrente ou lead prioritário em nicho ainda sem modelo no portfólio, gerar o bloco YAML previsto em `../Context/contrato-handoff-site-social.md` (`nicho`, `estilo_visual_sugerido`, `cores_sugeridas`, `estrutura_site_sugerida`, `dores_principais`, `objetivo_conversao`).

## Entregável
- Tabela/CSV compatível com `../Context/modelo-planilha-leads.csv` contendo as 11 colunas exatas.
- Relatório curto de auditoria: total de leads analisados, duplicatas removidas, leads prontos (`Pendente` verificado) vs. leads pendentes de validação externa, e distribuição por nicho.
- (Opcional, quando aplicável) Bloco YAML de **Briefing de Nicho / Lead** para handoff com `criadores-de-site`.

## Critérios de Aceite
- Cabeçalho e colunas 100% compatíveis com `../Context/modelo-planilha-leads.csv`.
- Cada linha possui sugestão visual e estrutural coerente com o nicho e observação objetiva do validador.
- Nenhum contato ou dado de perfil é inventado; dados não checados externamente estão explicitamente marcados.
- Leads com `Opt_Out` ou `Sem_Interesse` são isolados para evitar novo contato.
