# Design — Onda 0: Arquitetura Kiro V3 da Frente de Social Media

## 1. Descoberta e Isolamento de Workspace
Como o `kiro-cli` descobre agentes locais exclusivamente no nível superior de `.kiro/agents/` do diretório de trabalho atual, `criadores-de-social-media/` opera como um **workspace Kiro V3 autônomo**. Isso garante que:
- Ao iniciar o `kiro-cli` dentro de `criadores-de-social-media/`, apenas os 5 especialistas de conteúdo e prospecção são carregados no escopo de workspace.
- As 6 skills de social media permanecem encapsuladas em `criadores-de-social-media/.kiro/skills/`, evitando mistura de contexto com as skills técnicas de desenvolvimento web em `criadores-de-site/`.

## 2. Topologia de Agentes, Ferramentas e Permissões V3

| Agente | Tools | Permissões V3 (`permissions.rules`) | Skills Associadas |
| :--- | :--- | :--- | :--- |
| `social-estrategista` | `read`, `write`, `grep`, `glob`, `thinking` | `fs_read` (`./**`, `../Context/**`), `fs_write` (`./**`) | `planejar-calendario-editorial` |
| `social-pesquisa-trends` | `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking` | `fs_read` (`./**`, `../Context/**`), `fs_write` (`./**`), `web_search` (`*`), `web_fetch` (`*`) | `pesquisar-pautas-virais` |
| `social-copywriter` | `read`, `write`, `grep`, `glob`, `thinking` | `fs_read` (`./**`, `../Context/**`), `fs_write` (`./**`) | `escrever-copy-conversao` |
| `social-criativos` | `read`, `write`, `grep`, `glob`, `thinking` | `fs_read` (`./**`, `../Context/**`), `fs_write` (`./**`) | `produzir-briefing-criativo` |
| `social-prospeccao-sdr` | `read`, `write`, `web_fetch`, `web_search`, `grep`, `glob`, `thinking` | `fs_read` (`./**`, `../Context/**`), `fs_write` (`./**`), `web_search` (`*`), `web_fetch` (`*`) | `qualificar-leads-prospeccao`, `roteiro-abordagem-dm` |

### Decisões de Segurança e Menor Privilégio
- **Sem shell por padrão:** nenhum dos 5 agentes recebe a tool `shell`, reduzindo superfície de risco durante produção editorial e qualificação de leads.
- **Leitura seletiva externa:** `fs_read` autoriza `./**` e `../Context/**` para acesso direto ao modelo oficial de planilha e ao contrato de handoff sem liberar escrita fora do workspace (`fs_write` restrito a `./**`).
- **Pesquisa web restrita aos papéis investigativos:** apenas `social-pesquisa-trends` e `social-prospeccao-sdr` possuem `web_search` e `web_fetch`.

## 3. Fluxo Operacional e Integração com `criadores-de-site`

```
[social-pesquisa-trends] ──(Pautas/Objeções)──► [social-estrategista] ◄──(Pacote de Portfólio)── [criadores-de-site]
                                                       │
                         ┌─────────────────────────────┼─────────────────────────────┐
                         ▼                             ▼                             ▼
               [social-copywriter]             [social-criativos]          [social-prospeccao-sdr]
            (Hooks, AIDA/PAS, CTAs)       (Slides, Capas, Prompts)     (Planilha CSV + Roteiros DM)
                                                                                     │
                                                                    (Briefing de Nicho/Lead YAML)
                                                                                     ▼
                                                                            [criadores-de-site]
```

## 4. Camada de Qualidade Contínua
- **Steering (`inclusion: always`)** injeta regras de posicionamento, formatos do Instagram e governança de leads em todos os agentes da frente.
- **Hook `Stop` (`social-handoff-checklist.json`)** atua como barreira final de consistência antes de encerrar qualquer entrega, exigindo explicitação de nicho, CTA, formato da planilha e distinção factual entre rascunhos e dados reais verificados.
