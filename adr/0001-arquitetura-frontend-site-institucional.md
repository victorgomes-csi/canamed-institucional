# ADR-0001 — Arquitetura Frontend do Site Institucional Cana Med

- **Status:** Aceito
- **Data:** 2026-10-16
- **Contexto:** Construção do site institucional (`canamed-institucional`) a partir das 3 telas projetadas no Google Stitch (`projects/16150120632961035693`: *Página Inicial*, *Sobre Nós*, *Cana Med Mulher*).

---

## 1. Problema

Precisamos transformar os três designs de alta fidelidade do Stitch (`home.html`, `sobre-nos.html`, `canamed-mulher.html`) em uma aplicação institucional modular, de fácil manutenção, com carregamento rápido, roteamento limpo entre páginas e âncoras de seção, substituição das URLs temporárias do Stitch pelos ativos locais oficiais (`assets/brand/` e `assets/screenshots/`) e cobertura integral de testes automatizados (TDD) alinhada ao ecossistema do projeto principal `canamed`.

## 2. Alternativas Consideradas

1. **Arquivos HTML estáticos avulsos:** Simples inicialmente, mas duplica cabeçalho, rodapé, tokens de tema e scripts de interação, além de dificultar testes automatizados de componentes e manutenção compartilhada.
2. **SPA/ App Modular em React 19 + TypeScript + Vite 6 + Tailwind CSS + Vitest:** Mantém total alinhamento com a stack de frontend do projeto `canamed` (React 19, Vite 6, TypeScript, React Router v7, Vitest, Testing Library, Playwright), permitindo componentização de `Navbar` e `Footer`, fidelidade 1:1 com as classes Tailwind e tokens `Clinical Precision & Care` exportados pelo Stitch, e execução do fluxo TDD do ecossistema `.agents/`.
3. **Framework SSR pesado (Next.js):** Adiciona complexidade desnecessária e diverge do ferramental padronizado (Vite + Vitest) utilizado pelos agentes em `canamed`.

## 3. Decisão

Adotar **React 19 + TypeScript + Vite 6 + React Router v7 + Tailwind CSS v3 + Vitest + React Testing Library**, estruturando o projeto na raiz do repositório `canamed-institucional` com:
- Tokens de tema `Clinical Precision & Care` idênticos aos protótipos do Stitch (`Plus Jakarta Sans`, paleta `#006565`/`#008080`/`#156873`/`#00664e`/`#E6FFFA` e gradientes dedicados da vertical `Cana Med Mulher` `#e11d74` → `#7c2d8c` → `#4c1d95`).
- Ativos estáticos servidos localmente em `/assets/brand/*` e `/assets/screenshots/*`, eliminando dependência de links externos temporários (`lh3.googleusercontent.com`).
- Navegação híbrida inteligente (`ScrollToAnchor`) que permite transitar entre rotas (`/`, `/sobre-nos`, `/cana-med-mulher`) e rolar suavemente para seções internas (`/#frentes`, `/#contato`, `/cana-med-mulher#conheca-app`).

## 4. Consequências

- **Positivas:** Reuso total de componentes compartilhados (`Header`, `Footer`, `ContactForm`), testes rápidos de componentes com Vitest/JSDOM, fidelidade visual exata ao Stitch e zero quebra de imagens externas.
- **Negativas / Cuidados:** Garantir títulos dinâmicos de documento (`document.title`) e restauração de scroll a cada mudança de rota.
