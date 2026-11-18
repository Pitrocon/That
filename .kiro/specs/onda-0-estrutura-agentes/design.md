# Design — Onda 0: Arquitetura Kiro em Duas Frentes + Hub Raiz

## Decisão de Descoberta no Kiro CLI
Verificou-se empiricamente que `kiro-cli agent list` descobre apenas arquivos `*.json` no nível superior de `.kiro/agents/` do diretório de trabalho atual (não percorre subpastas).

Para atender simultaneamente ao pedido de **separação em duas pastas** (`criadores-de-site/` e `criadores-de-social-media/`) e à **descoberta nativa do Kiro**, adotou-se a topologia de **workspaces independentes por frente + hub raiz**:
- Executar `kiro-cli` na raiz carrega `orquestrador-geral` e as skills/steering globais.
- Executar `kiro-cli` em `criadores-de-site/` carrega os 5 agentes de criação de sites e suas 6 skills separadas.
- Executar `kiro-cli` em `criadores-de-social-media/` carrega os 5 agentes de social media/prospecção e suas 6 skills separadas.

## Adaptação dos Agentes
- **Criadores de Site (`criadores-de-site/.kiro/agents/`):** `site-pesquisa-nichos`, `site-arquitetura`, `site-frontend`, `site-design-seo`, `site-qa`.
- **Criadores de Social Media (`criadores-de-social-media/.kiro/agents/`):** `social-estrategista`, `social-pesquisa-trends`, `social-copywriter`, `social-criativos`, `social-prospeccao-sdr`.
- **Integração:** Regida por `Context/contrato-handoff-site-social.md`, evitando acoplamento direto entre skills das duas pastas.
