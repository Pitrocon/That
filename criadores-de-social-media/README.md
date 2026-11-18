# Criadores de Social Media — Conteúdo, Autoridade & Prospecção no Instagram

Frente autônoma do ecossistema **Fábrica de Sites & Social Media** dedicada à geração de demanda orgânica, produção de conteúdo de conversão no Instagram, qualificação de leads e prospecção ativa via Direct (DM) para negócios locais e profissionais liberais.

---

## Visão da Frente

Esta frente transforma os projetos e modelos construídos pela fábrica de sites em **autoridade comercial e reuniões de venda**. Seu trabalho conecta três pilares contínuos:

1. **Inteligência de Conteúdo & Pautas:** mapear dores reais de quem depende só do Instagram ou do boca a boca (estúdios de tatuagem, músicos/bandas, clínicas de estética, barbearias, prestadores de serviço) e identificar formatos com maior retenção e compartilhamento.
2. **Produção Editorial & Criativa:** planejar o calendário equilibrando descoberta, autoridade, prova de portfólio e conversão, com copy persuasiva (AIDA/PAS) e direção visual detalhada para Reels, Carrosséis e Stories.
3. **Prospecção & Conversão em DM (SDR):** estruturar e auditar leads no padrão da planilha oficial (`../Context/modelo-planilha-leads.csv`), executar abordagens personalizadas sem spam e conduzir conversas no Direct até o diagnóstico ou fechamento.

---

## Agentes Kiro V3 (`.kiro/agents/`)

| Agente | Arquivo | Especialidade | Ferramentas | Skills Conectadas |
| :--- | :--- | :--- | :--- | :--- |
| **social-estrategista** | `.kiro/agents/social-estrategista.json` | Estratégia editorial, calendário semanal/mensal, KPIs de conteúdo/DM e alinhamento entre portfólio de sites e campanhas | `read`, `write`, `grep`, `glob`, `thinking` | `planejar-calendario-editorial` |
| **social-pesquisa-trends** | `.kiro/agents/social-pesquisa-trends.json` | Pesquisa de tendências, formatos virais, benchmarks de concorrentes e objeções por nicho no Instagram | `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking` | `pesquisar-pautas-virais` |
| **social-copywriter** | `.kiro/agents/social-copywriter.json` | Ganchos (hooks), roteiros de Reels/carrosséis, legendas AIDA/PAS, CTAs para DM e hashtags segmentadas | `read`, `write`, `grep`, `glob`, `thinking` | `escrever-copy-conversao` |
| **social-criativos** | `.kiro/agents/social-criativos.json` | Direção de arte, diagramação slide a slide, contraste/hierarquia visual e prompts de imagem/criativos | `read`, `write`, `grep`, `glob`, `thinking` | `produzir-briefing-criativo` |
| **social-prospeccao-sdr** | `.kiro/agents/social-prospeccao-sdr.json` | Pesquisa e auditoria de leads na planilha oficial, mensagens personalizadas de abordagem, follow-up e qualificação na DM | `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking` | `qualificar-leads-prospeccao`, `roteiro-abordagem-dm` |

---

## Skills Exclusivas (`.kiro/skills/`)

| Skill | Caminho | Objetivo Principal |
| :--- | :--- | :--- |
| **planejar-calendario-editorial** | `.kiro/skills/planejar-calendario-editorial/SKILL.md` | Montar calendário semanal/mensal equilibrando descoberta, autoridade, prova de portfólio e conversão em DM |
| **pesquisar-pautas-virais** | `.kiro/skills/pesquisar-pautas-virais/SKILL.md` | Levantar temas em alta, objeções de clientes sem site, formatos vencedores e ganchos por nicho |
| **escrever-copy-conversao** | `.kiro/skills/escrever-copy-conversao/SKILL.md` | Redigir hooks, corpo AIDA/PAS, legendas escaneáveis, CTAs de DM/bio e blocos segmentados de hashtags |
| **produzir-briefing-criativo** | `.kiro/skills/produzir-briefing-criativo/SKILL.md` | Especificar direção visual slide a slide de carrosséis, capas de Reels, stories, contraste, hierarquia e prompts visuais |
| **qualificar-leads-prospeccao** | `.kiro/skills/qualificar-leads-prospeccao/SKILL.md` | Estruturar, enriquecer e auditar leads no esquema de `../Context/modelo-planilha-leads.csv` com governança de dados |
| **roteiro-abordagem-dm** | `.kiro/skills/roteiro-abordagem-dm/SKILL.md` | Criar fluxos de 1ª mensagem personalizada, follow-up, qualificação de dor/orçamento e condução para reunião |

---

## Governança Transversal (`.kiro/steering/` e `.kiro/hooks/`)

- **Steering (`inclusion: always`):**
  - `.kiro/steering/tom-de-voz-e-posicionamento.md` — Posicionamento comercial, proposta de valor para negócios locais e proibição de promessas irreais/clickbait.
  - `.kiro/steering/formatos-instagram-conversao.md` — Boas práticas para Reels, Carrosséis, Stories de prova social e CTAs de resposta orgânica na DM.
  - `.kiro/steering/governanca-leads-e-dm.md` — Padrão da planilha de leads, personalização por nicho, prevenção de spam/bloqueio e marcação explícita de dados não validados.
- **Hook (`version: "v1"`):**
  - `.kiro/hooks/social-handoff-checklist.json` — Checklist automático no evento `Stop` verificando nicho-alvo, CTA claro, formato da planilha (quando aplicável) e distinção entre rascunhos/hipóteses e dados reais verificados.

---

## Como Usar com o `kiro-cli`

> **Importante:** O `kiro-cli` descobre apenas os agentes locais do diretório atual (`.kiro/agents/*.json`). Execute os comandos sempre **dentro de `criadores-de-social-media/`**.

```powershell
cd c:\Users\admin\OneDrive\Desktop\IAS\Antigravity\That\criadores-de-social-media

# Listar os agentes descobertos neste workspace
kiro-cli agent list

# Validar um agente específico
kiro-cli agent validate --path .kiro/agents/social-estrategista.json

# Iniciar chat no motor V3 com um especialista
kiro-cli --v3 --agent social-estrategista
kiro-cli --v3 --agent social-pesquisa-trends
kiro-cli --v3 --agent social-copywriter
kiro-cli --v3 --agent social-criativos
kiro-cli --v3 --agent social-prospeccao-sdr
```

### Fluxo Típico de Trabalho
1. **`social-estrategista`** define a campanha da semana/mês, nichos prioritários e metas de conteúdo/DM.
2. **`social-pesquisa-trends`** mapeia tendências, objeções e formatos em alta por nicho.
3. **`social-copywriter`** transforma pautas e provas de portfólio em roteiros, ganchos, legendas e CTAs.
4. **`social-criativos`** especifica a direção visual slide a slide, capas e prompts de geração/edição de imagem.
5. **`social-prospeccao-sdr`** organiza a planilha de leads, audita campos e conduz roteiros de abordagem e follow-up na DM.

---

## Contrato de Integração com `criadores-de-site`

A integração entre as duas frentes segue estritamente [`../Context/contrato-handoff-site-social.md`](../Context/contrato-handoff-site-social.md) e a base de leads [`../Context/modelo-planilha-leads.csv`](../Context/modelo-planilha-leads.csv), sem acoplamento direto entre skills das duas pastas:

1. **Saída `criadores-de-social-media` → `criadores-de-site` (Demanda & Leads):**
   - Ao detectar nichos com alta tração ou leads qualificados na planilha, `social-prospeccao-sdr` e `social-estrategista` produzem um **Briefing de Nicho / Lead** em YAML (`nicho`, `estilo_visual_sugerido`, `cores_sugeridas`, `estrutura_site_sugerida`, `dores_principais`, `objetivo_conversao`) para alimentar o pipeline de `criadores-de-site`.
2. **Entrada `criadores-de-site` → `criadores-de-social-media` (Prova de Portfólio):**
   - Ao receber um **Pacote de Portfólio** validado por `site-qa` (URL de preview/produção verificada ou indicação explícita se ainda local, nicho, paleta, tipografia, diferenciais técnicos e capturas reais verificadas), `social-estrategista` distribui o ativo para `social-copywriter`, `social-criativos` (estudos de caso, "Antes e Depois") e `social-prospeccao-sdr` (demonstração consultiva na abordagem de leads do mesmo nicho).
3. **Regra de Integridade Factual:**
   - É proibido apresentar site, URL publicada, métrica de engajamento ou dado de contato como real/verificado sem confirmação explícita. Rascunhos, projeções e dados pendentes de checagem externa devem ser rotulados claramente.
