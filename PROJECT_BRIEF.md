# CANAMED INSTITUCIONAL — Project Brief

> **Documento de entrada oficial do projeto `canamed-institucional`.**
> Fonte de verdade integral: [`GEMINI.md`](GEMINI.md) e protótipos do Stitch em [`assets/prototypes/stitch/`](assets/prototypes/stitch/).

- **Versão:** 1.0
- **Data:** 2026-10-16
- **Status:** Em Planejamento (Fase A)
- **Projeto Stitch:** `projects/16150120632961035693` (*Cana Med Institutional Website*)

---

## 1. Escopo do Projeto

Construção da aplicação web do **Site Institucional da Cana Med**, contemplando três páginas integradas com navegação fluida, alta fidelidade visual aos protótipos do Stitch, responsividade mobile/tablet/desktop, acessibilidade WCAG AA e suíte de testes automatizados (Vitest + Testing Library + Playwright):

1. **Página Inicial (`/`)**: Apresentação institucional da Cana Med, proposta de valor, cenário da saúde, painel interativo das 4 Frentes de Atuação, destaque da Cana Med Mulher e seção de contato.
2. **Sobre Nós (`/sobre-nos`)**: Origem e propósito da Cana Med (engenharia de software aplicada à saúde), destaque de transição para a primeira solução (Cana Med Mulher) e chamada para soluções.
3. **Cana Med Mulher (`/cana-med-mulher`)**: Landing page completa da solução gineco-obstétrica, com mockup hero, desafios operacionais, vitrine interativa de 4 módulos com screenshots reais do sistema, visão por perfil da clínica, compromissos de usabilidade/privacidade/segurança e formulário de agendamento de demonstração.

---

## 2. Stack Tecnológica

- **Runtime & Bundler:** Vite 6 + React 19 + TypeScript 5.6
- **Roteamento:** `react-router-dom` v7 (com suporte a navegação entre rotas `/`, `/sobre-nos`, `/cana-med-mulher` e scroll suave para âncoras `#frentes`, `#contato`, `#conheca-app`, `#cenario`)
- **Estilização:** Tailwind CSS + Design Tokens customizados do Stitch (`Clinical Precision & Care`) + fontes `Plus Jakarta Sans` e ícones `Material Symbols Outlined` / `lucide-react`
- **Testes:** Vitest + React Testing Library (unitários/componentes) e Playwright (E2E)

---

## 3. Documentos Relacionados

- [`GEMINI.md`](GEMINI.md) — Diretrizes gerais e governança.
- [`.agents/AGENTS.md`](.agents/AGENTS.md) — Catálogo de agentes e fluxos de trabalho.
- [`specs/0001-spec-site-institucional-canamed.md`](specs/0001-spec-site-institucional-canamed.md) — Especificação técnica e funcional completa.
- [`adr/0001-arquitetura-frontend-site-institucional.md`](adr/0001-arquitetura-frontend-site-institucional.md) — Decisão arquitetural da aplicação.
- [`docs/plans/2026-10-16-site-institucional-canamed.md`](docs/plans/2026-10-16-site-institucional-canamed.md) — Plano de implementação atômico orientado a TDD.
