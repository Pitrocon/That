---
name: roteiro-abordagem-dm
description: Criar fluxos de primeira mensagem personalizada no Direct do Instagram, cadência de follow-up sem spam, qualificação de dor/orçamento e condução para reunião ou fechamento.
---

# Roteiro de Abordagem e Qualificação em DM (SDR)

## Objetivo
Conduzir conversas humanas, consultivas e personalizadas no Direct do Instagram — tanto em **prospecção ativa (outbound)** a partir da planilha de leads quanto em **atendimento receptivo (inbound)** disparado por palavras-chave nos posts — qualificando dor, momento e orçamento até o agendamento de conversa/proposta.

## Entradas Esperadas
- **Dados do Lead ou Contexto de Entrada:**
  - *Outbound:* linha do lead no padrão de `../Context/modelo-planilha-leads.csv` (`Nicho_Ramo`, `Nome_Empresa_ou_Profissional`, `Instagram_URL`, `Estilo_Visual_Sugerido`, `Estrutura_Site_Sugerida`, `Observacoes_Validador`).
  - *Inbound:* post/CTA de origem, palavra-chave comentada/enviada e nicho do interessado.
- **Ativo de apoio disponível:** se houver site modelo/portfólio real entregue por `criadores-de-site` (com URL/status verificados) ou se é apenas proposta conceitual.

## Passo a Passo
1. **Preparar a Primeira Mensagem Personalizada (Toque 1):**
   - **Proibido texto genérico em massa.** Deve conter:
     1. Saudação curta pelo nome/estúdio/banda/clínica.
     2. Referência real e específica ao perfil ou nicho (extraída de `Observacoes_Validador` — se ainda não verificada no perfil ao vivo, sinalizar como `[PERSONALIZAR APÓS CHECAR PERFIL]`).
     3. Ponte de valor concisa ligada à dor do nicho (ex.: centralizar portfólio de tatuagens e triagem de orçamento além dos Destaques).
     4. Pergunta leve de permissão (ex.: *"Posso te mandar um exemplo rápido de como estruturamos isso para estúdios do seu estilo, sem compromisso?"*).
   - Máximo de 3 a 4 linhas no celular (sem textão e sem link frio logo na 1ª mensagem).
2. **Desenhar Árvore de Resposta e Qualificação:**
   - **Se responder "Sim / Pode mandar":** apresentar a ideia/modelo de forma visual e objetiva (sinalizando explicitamente se for modelo demonstrativo) e fazer 1 pergunta de diagnóstico por vez:
     - *Dor/Processo atual:* como os clientes chegam e agendam hoje (tudo na DM/WhatsApp?).
     - *Objetivo:* o que mais trava hoje (tempo respondendo curiosos, pouca confiança, invisibilidade no Google?).
     - *Momento/Orçamento:* confirmar se faz sentido investir em uma estrutura profissional agora e convidar para chamada rápida de 15 min ou envio de proposta alinhada.
   - **Se responder com objeção comum** (*"já tenho Instagram"*, *"agora estou sem tempo"*, *"quanto custa?"*): fornecer roteiro curto de contorno consultivo (validar o ponto do lead → mostrar ganho prático complementar ao Instagram → dar faixa transparente ou propor diagnóstico rápido de 10–15 min).
   - **Se responder "Não tenho interesse / Pare":** agradecer com educação, encerrar sem insistência e atualizar status para `Sem_Interesse` ou `Opt_Out`.
3. **Definir Cadência Anti-Spam de Follow-up:**
   - **D+3 (Toque 2 — Valor leve):** retomar com 1 frase curta trazendo um detalhe útil específico do nicho (sem cobrança passivo-agressiva do tipo *"viu minha mensagem?"*).
   - **D+7 (Toque 3 — Encerramento elegante):** confirmar que não vai insistir e deixar a porta aberta caso decida profissionalizar o site no futuro.
   - Limite máximo: **2 follow-ups** sem resposta. Nunca disparar várias mensagens em sequência.
4. **Atualizar Registro da Planilha:**
   - Indicar exatamente qual valor deve ir para `Status_Abordagem_DM` e o resumo datado em `Observacoes_Validador`.

## Entregável
Playbook de DM pronto para uso contendo:
- Identificação do cenário (`Outbound por Lead` ou `Inbound por Palavra-Chave`) e `Nicho-alvo`.
- Mensagem 1 personalizada (3–4 linhas) + nota de personalização obrigatória antes do envio.
- Fluxo de Qualificação (respostas para Interesse, Dúvida de Preço, Objeções do nicho e Desinteresse/Opt-Out).
- Sequência de Follow-up (D+3 e D+7) com regras anti-bloqueio.
- CTA de conversão para reunião/proposta e instrução de atualização do `Status_Abordagem_DM`.

## Critérios de Aceite
- Primeira mensagem é curta, personalizada para o nicho/lead e sem links invasivos ou promessas irreais.
- Fluxo inclui tratamento de objeções, respeito imediato a opt-out e teto de 2 follow-ups (prevenção de spam/bloqueio).
- Compatível com os status e colunas de `../Context/modelo-planilha-leads.csv`.
- Marca explicitamente campos que exijam conferência manual no perfil real ou links de portfólio ainda não publicados.
