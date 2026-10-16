# CANAMED INSTITUCIONAL — Briefing do Projeto

> Documento de referência normativa para o desenvolvimento do **Site Institucional da Cana Med** (`canamed-institucional`).
> Este repositório compartilha a governança multiagente (`.agents/`), as skills, os ativos oficiais de marca (`assets/brand/`) e os princípios de produto do ecossistema principal **CANA MED**.

---

## 1. Visão e Propósito

O **Site Institucional da Cana Med** (`canamed-institucional`) é a vitrine digital oficial da marca **Cana Med** e da sua primeira solução especializada, **Cana Med Mulher**.

- **Tagline Oficial:** *"Eficiência para quem mais precisa."*
- **Objetivo do Site:** Apresentar com rigor editorial, clareza e empatia o propósito da Cana Med, o cenário real que busca transformar nas clínicas de saúde, suas 4 frentes de atuação operacional e a solução **Cana Med Mulher** (voltada a clínicas ginecológicas e obstétricas), convertendo visitantes (médicos ginecologistas, gestores e equipes de clínicas) em diálogos comerciais e demonstrações.

---

## 2. Páginas e Arquitetura de Conteúdo (Fonte de Verdade: Stitch MCP)

Projeto Stitch de referência: **`Cana Med Institutional Website`** (`projects/16150120632961035693`).
Os protótipos HTML extraídos do Stitch estão versionados em [`assets/prototypes/stitch/`](assets/prototypes/stitch/):

1. **Página Inicial (`/`) — [`assets/prototypes/stitch/home.html`](assets/prototypes/stitch/home.html)**
   - **Header Global (`TopNavBar`):** Logotipo oficial Cana Med, links (`Início`, `Sobre Nós`, `Frentes de Atuação`, `Cana Med Mulher`, `Contato`), CTA `"Fale com a Cana Med"`, menu mobile responsivo.
   - **Hero Editorial (`#inicio`):** Proposta de valor `"Mais eficiência para quem dedica a vida a cuidar."`, CTAs, selos de rigor clínico e card arquitetural `"Fluxo Operacional Integrado"` (3 etapas + `+40% foco assistencial`).
   - **Cenário Real (`#cenario`):** 3 dores centrais das clínicas (`01 Sobrecarga de canais e recepção`, `02 Informações dispersas e retrabalho`, `03 Falta de continuidade com o consultório`) + faixa de conformidade LGPD.
   - **Frentes de Atuação (`#frentes`):** Painel interativo com 4 abas acessíveis (`01 Recepção e cadastro`, `02 Agendamento e agenda`, `03 Fluxo de atendimento`, `04 Acompanhamento médico e informações clínicas`) e diagramas visuais dinâmicos.
   - **Destaque Cana Med Mulher (`#cana-med-mulher`):** Apresentação executiva da solução gineco-obstétrica com link direto para `/cana-med-mulher`.
   - **Contato & CTA (`#contato`):** Formulário institucional de contato (`Nome Completo`, `E-mail Profissional`, `Nome da Clínica`, `Porte / Especialistas`, `Como podemos ajudar?`) com validação e estado de confirmação.
   - **Footer Global:** Identidade, navegação, selos LGPD/CFM e links institucionais.

2. **Sobre Nós (`/sobre-nos`) — [`assets/prototypes/stitch/sobre-nos.html`](assets/prototypes/stitch/sobre-nos.html)**
   - **Bloco 1 — Nossa Origem (`ORIGEM & PROPÓSITO`):** H1 `"Tecnologia especializada para transformar a gestão em saúde."`, narrativa sobre a fundação por engenheiros de software e 3 pilares (`Engenharia de Software com Propósito`, `Superação de Processos Arcaicos`, `Soluções Específicas por Realidade`).
   - **Bloco 2 — Nossa Primeira Solução (`Cana Med Mulher`):** Card de transição em destaque com barra superior em gradiente sutil, logo oficial `Cana Med Mulher`, 3 pilares (`Agendamento e Cadastros Especializados`, `Fluxo Clínico Acolhedor`, `Privacidade e Cuidado Obstétrico`) e CTA para `/cana-med-mulher`.
   - **Bloco 3 — Encerramento:** Chamada direta para conhecer as frentes de atuação (`/#frentes`).

3. **Cana Med Mulher (`/cana-med-mulher`) — [`assets/prototypes/stitch/canamed-mulher.html`](assets/prototypes/stitch/canamed-mulher.html)**
   - **Header Adaptado:** Logotipo `Cana Med Mulher` e item ativo destacado na identidade da vertical feminina (`#b8186c` / gradiente `#e11d74` → `#7c2d8c`).
   - **Seção 1 — Hero da Solução:** H1 `"Uma gestão mais organizada para quem cuida da saúde da mulher."`, proof points (CFM, LGPD, Fluxo Obstétrico & Ginecológico) e Browser Mockup com print real do PEP (`22_medico_ficha_ginecologica.png`).
   - **Seção 2 — Contexto Operacional:** 3 cards de desafios (`Desafio 01: Agenda e consultas`, `Desafio 02: Informações organizadas`, `Desafio 03: Fluxo de atendimento`).
   - **Seção 3 — Demonstração Interativa (`#conheca-app`):** 4 módulos em Browser Frames com capturas reais da aplicação:
     - `01 — Organize a agenda e recepção` (`09_app_agenda_recepcao.png`)
     - `02 — Gestão especializada gineco-obstétrica` (`22_medico_ficha_ginecologica.png`)
     - `03 — Monitoramento de prazos e retornos clínicos` (`20_medico_retornos.png`)
     - `04 — Gestão operacional e parâmetros da clínica` (`14_app_configuracoes.png`)
   - **Seção 4 — Visão de Pessoas:** 3 perfis (`Gestão da clínica`, `Recepção e equipe administrativa`, `Profissionais de saúde`).
   - **Seção 5 — Compromisso Institucional:** 3 pilares (`Usabilidade`, `Privacidade`, `Segurança`).
   - **Seção 6 — Contato / Apresentação (`#contato`):** Formulário dedicado para agendar demonstração da Cana Med Mulher.

---

## 3. Identidade Visual e Design System (`Clinical Precision & Care`)

- **Fonte Tipográfica:** `Plus Jakarta Sans` (pesos 400, 500, 600, 700, 800).
- **Paleta Institucional Cana Med:**
  - Primária: `#006565` / `#008080` (`primary` / `primary-container`)
  - Secundária: `#156873` / `#005F6A` (`secondary`)
  - Terciária / Destaque: `#00664e` / `#66CDAA` (`tertiary` / `mint-subtle: #E6FFFA`)
  - Superfícies: `#F8FAFA` (`surface-canvas`), `#FFFFFF` (`surface-card`), `#F0F4F4` (`surface-subtle`)
  - Texto e Bordas: `#333333` (`graphite-text`), `#718096` (`text-muted`), `#E2E8F0` (`border-subtle`), `#CBD5E1` (`border-muted`)
- **Identidade Vertical Cana Med Mulher:**
  - Acentos dedicados na página e destaques da solução feminina: `#e11d74`, `#b8186c`, `#7c2d8c`, `#4c1d95` (gradientes de marca da linha Mulher conforme os designs oficiais do Stitch e os logotipos `canamed-mulher-logolonga.svg` / `canamed-mulher-logocurta.svg`).
- **Ativos Oficiais:** Exclusivamente os arquivos em `assets/brand/` e `assets/screenshots/`.

---

## 4. Governança Multiagente e Fluxo Obrigatório

Todo o desenvolvimento segue o ecossistema configurado em [`.agents/AGENTS.md`](.agents/AGENTS.md) e [`.agents/rules/workflow.md`](.agents/rules/workflow.md):
- **Fase A (Planejamento):** SPEC formal em `specs/` + Plano de Implementação em `docs/plans/` com revisão de UI/UX.
- **Fase B (Implementação TDD):** Ciclos Red-Green-Refactor conduzidos pelo `implementador`.
- **Fase C (Validação):** Auditoria técnica e visual pelo `validador` e `ui-ux-reviewer`.
- **Fase D (Conclusão):** 100% dos testes aprovados, build limpo e registro em `docs/CHANGELOG_AGENTE.md`.
