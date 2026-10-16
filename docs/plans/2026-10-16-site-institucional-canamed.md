# Site Institucional Cana Med — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir a aplicação web completa do Site Institucional da Cana Med (`canamed-institucional`) com as 3 páginas criadas no Google Stitch (**Página Inicial** `/`, **Sobre Nós** `/sobre-nos` e **Cana Med Mulher** `/cana-med-mulher`), utilizando ativos oficiais locais, Design System `Clinical Precision & Care` e cobertura integral de testes automatizados (TDD).

**Architecture:** SPA modular em React 19 + TypeScript + Vite 6 + React Router v7 + Tailwind CSS v3. As páginas compartilham um layout adaptativo (`Header`, `Footer`, `ScrollToAnchor`) que alterna automaticamente para a identidade visual da linha **Cana Med Mulher** na rota `/cana-med-mulher`. Todas as imagens apontam para ativos locais servidos a partir de `public/assets/brand/` e `public/assets/screenshots/`.

**Tech Stack:** React 19, TypeScript 5.6, Vite 6, React Router DOM 7, Tailwind CSS 3, Vitest 3, React Testing Library, JSDOM.

**Spec:** [`specs/0001-spec-site-institucional-canamed.md`](../../specs/0001-spec-site-institucional-canamed.md)

## Global Constraints

- Todas as imagens (`<img>`) devem referenciar exclusivamente caminhos locais (`/assets/brand/...` e `/assets/screenshots/...`); nenhuma URL `lh3.googleusercontent.com` dos protótipos brutos pode permanecer no código de produção (RN-001 / CA-007).
- Tipografia oficial `Plus Jakarta Sans` e ícones `Material Symbols Outlined` carregados em `index.html`, com tokens de cores e tamanhos fiéis ao Design System `Clinical Precision & Care` do Stitch (`#006565`, `#008080`, `#156873`, `#00664e`, `#E6FFFA`, `#F8FAFA`, `#333333` e gradientes `#e11d74` → `#7c2d8c` → `#4c1d95` na página Cana Med Mulher).
- O painel interativo "Frentes de Atuação" (`FrentesSection`) deve suportar clique e teclado (`Enter` e `Space`) nas 4 abas, atualizando `aria-selected` e o painel visível (`role="tabpanel"`) (RN-002 / CA-002).
- O menu mobile no `Header` deve alternar `aria-expanded` (`"true"`/`"false"`), trocar o ícone (`menu`/`close`) e fechar automaticamente ao clicar em qualquer link (CA-006).
- Formulários de contato em `/` e `/cana-med-mulher` devem validar campos obrigatórios, exibir estado de envio e mostrar banner de confirmação (`role="status"`), limpando os campos após submissão (RN-004 / CA-005).

## Review Focus

- **Navegação entre páginas com âncoras (`/#frentes`, `/#contato`, `/cana-med-mulher#conheca-app`):** Clicar em "Frentes de Atuação" ou "Contato" a partir de `/sobre-nos` ou `/cana-med-mulher` deve navegar corretamente e posicionar o foco/scroll na seção correspondente sem erro de rota.
- **Acessibilidade por teclado nas abas de "Frentes de Atuação":** Pressionar `Enter` ou `Space` em qualquer aba (`tab-frente-1` a `tab-frente-4`) deve ativar o painel correspondente exatamente como o clique do mouse.
- **Fechamento automático do Drawer Mobile:** Abrir o menu em telas móveis e clicar em um link de navegação deve fechar o drawer imediatamente para não cobrir o conteúdo da nova página.
- **Identidade contextual no Header:** Na rota `/cana-med-mulher`, o `Header` deve exibir o logotipo oficial `canamed-mulher-logolonga.png` e destacar o item ativo `"Cana Med Mulher"` em `#b8186c`; nas rotas `/` e `/sobre-nos`, deve exibir o logotipo institucional da Cana Med (`canadamed_logogrande_comtitulo-removebg-preview.png`) e destaque em `#006565`.
- **Zero imagens quebradas ou externas:** Todos os 5 screenshots reais (`09_app_agenda_recepcao.png`, `22_medico_ficha_ginecologica.png`, `20_medico_retornos.png`, `14_app_configuracoes.png`, `01_home_portal_acesso.png`) e logotipos devem estar presentes em `public/assets/` e validados por teste automatizado.

---

## Mapa de Arquivos da Aplicação

```text
canamed-institucional/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── assets/
│       ├── brand/
│       │   ├── canadamed_logogrande_comtitulo-removebg-preview.png
│       │   ├── canamed_logo-removebg-preview.png
│       │   ├── canamed-mulher-logolonga.png
│       │   ├── canamed-mulher-logolonga.svg
│       │   ├── canamed-mulher-logocurta.png
│       │   └── canamed-mulher-logocurta.svg
│       └── screenshots/
│           ├── 01_home_portal_acesso.png
│           ├── 09_app_agenda_recepcao.png
│           ├── 14_app_configuracoes.png
│           ├── 20_medico_retornos.png
│           └── 22_medico_ficha_ginecologica.png
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── test/
    │   └── setup.ts
    ├── constants/
    │   └── assets.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── ScrollToAnchor.tsx
    │   │   └── Layout.test.tsx
    │   └── home/
    │       ├── FrentesSection.tsx
    │       └── FrentesSection.test.tsx
    └── pages/
        ├── HomePage.tsx
        ├── HomePage.test.tsx
        ├── AboutPage.tsx
        ├── AboutPage.test.tsx
        ├── CanamedMulherPage.tsx
        └── CanamedMulherPage.test.tsx
```

---

### Task 1: Scaffolding do Projeto, Design Tokens (`Clinical Precision & Care`) e Ativos Oficiais

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/test/setup.ts`
- Create: `src/constants/assets.ts`
- Create: `src/constants/assets.test.ts`
- Copy to: `public/assets/brand/*` and `public/assets/screenshots/*`

**Interfaces:**
- Consumes: Ativos oficiais já copiados em `assets/brand/` e `assets/screenshots/`.
- Produces:
  - `BRAND_ASSETS` e `APP_SCREENSHOTS` em `src/constants/assets.ts`:
    ```ts
    export const BRAND_ASSETS = {
      canamedLogoFull: '/assets/brand/canadamed_logogrande_comtitulo-removebg-preview.png',
      canamedMonogram: '/assets/brand/canamed_logo-removebg-preview.png',
      mulherLogoLonga: '/assets/brand/canamed-mulher-logolonga.png',
      mulherLogoCurta: '/assets/brand/canamed-mulher-logocurta.png',
    } as const;

    export const APP_SCREENSHOTS = {
      agendaRecepcao: '/assets/screenshots/09_app_agenda_recepcao.png',
      fichaGinecologica: '/assets/screenshots/22_medico_ficha_ginecologica.png',
      medicoRetornos: '/assets/screenshots/20_medico_retornos.png',
      appConfiguracoes: '/assets/screenshots/14_app_configuracoes.png',
    } as const;
    ```

- [ ] **Step 1: Configurar `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/index.css` e copiar `assets/` para `public/assets/`**

Configurar o Tailwind CSS exatamente com as cores, fontes (`Plus Jakarta Sans`), espaçamentos e tamanhos tipográficos (`display-hero`, `headline-lg`, `headline-md`, `headline-sm`, `title-md`, `body-lg`, `body-md`, `body-sm`, `label-md`, `label-sm`, `caption`) e classes utilitárias de gradiente da Cana Med Mulher (`.brand-gradient-text`, `.brand-button-gradient`, `.brand-tag-bg`) extraídos dos protótipos do Stitch.

- [ ] **Step 2: Write the failing test `src/constants/assets.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { BRAND_ASSETS, APP_SCREENSHOTS } from './assets';

describe('Official Local Assets (RN-001 / CA-007)', () => {
  it('maps all brand logos and app screenshots to existing local files in public/assets', () => {
    const allPaths = [...Object.values(BRAND_ASSETS), ...Object.values(APP_SCREENSHOTS)];
    for (const relPath of allPaths) {
      expect(relPath.startsWith('/assets/')).toBe(true);
      const diskPath = path.resolve(process.cwd(), 'public', relPath.slice(1));
      expect(fs.existsSync(diskPath), `Missing asset file: ${diskPath}`).toBe(true);
    }
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npx vitest run src/constants/assets.test.ts`
Expected: FAIL with module `./assets` not found.

- [ ] **Step 4: Implement `src/constants/assets.ts`**

Exportar `BRAND_ASSETS` e `APP_SCREENSHOTS` apontando para os caminhos locais em `/assets/brand/` e `/assets/screenshots/`.

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/constants/assets.test.ts`
Expected: PASS (1 passed).

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "chore: scaffold project with Stitch design tokens and local official assets"
```

---

### Task 2: Layout Compartilhado (`Header`, `Footer` e `ScrollToAnchor`)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/ScrollToAnchor.tsx`
- Create: `src/components/layout/Layout.test.tsx`

**Interfaces:**
- Consumes: `BRAND_ASSETS` from `src/constants/assets.ts`, `useLocation` / `Link` from `react-router-dom`.
- Produces:
  - `Header`: `export function Header(): JSX.Element`
  - `Footer`: `export function Footer(): JSX.Element`
  - `ScrollToAnchor`: `export function ScrollToAnchor(): null`

- [ ] **Step 1: Write the failing test `src/components/layout/Layout.test.tsx`**

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';
import { Footer } from './Footer';
import { BRAND_ASSETS } from '../../constants/assets';

describe('Header & Footer Shared Layout (RN-003, CA-006)', () => {
  it('renders institutional Cana Med logo on "/" and highlights Início', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByRole('img', { name: /Cana Med/i });
    expect(logo).toHaveAttribute('src', BRAND_ASSETS.canamedLogoFull);
    expect(screen.getAllByText('Sobre Nós')[0].closest('a')).toHaveAttribute('href', '/sobre-nos');
    expect(screen.getAllByText('Cana Med Mulher')[0].closest('a')).toHaveAttribute('href', '/cana-med-mulher');
  });

  it('switches to Cana Med Mulher logo and magenta active state on "/cana-med-mulher"', () => {
    render(
      <MemoryRouter initialEntries={['/cana-med-mulher']}>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByRole('img', { name: /Cana Med Mulher/i });
    expect(logo).toHaveAttribute('src', BRAND_ASSETS.mulherLogoLonga);
  });

  it('toggles mobile navigation drawer and closes it when clicking a link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const toggleBtn = screen.getByRole('button', { name: /Abrir menu de navegação/i });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    const mobileSobreLink = screen.getAllByText('Sobre Nós')[1];
    fireEvent.click(mobileSobreLink);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders Footer with tagline, navigation links, and LGPD/CFM badges', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/Eficiência para quem mais precisa/i)).toBeInTheDocument();
    expect(screen.getByText(/LGPD/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/layout/Layout.test.tsx`
Expected: FAIL with module `./Header` not found.

- [ ] **Step 3: Implement `Header.tsx`, `Footer.tsx`, and `ScrollToAnchor.tsx`**

Implementar `Header` com detecção de rota ativa (`useLocation`), exibindo `BRAND_ASSETS.mulherLogoLonga` e destaque `#b8186c` quando `location.pathname === '/cana-med-mulher'`, e `BRAND_ASSETS.canamedLogoFull` com destaque `text-primary` nas demais rotas. Incluir links para `/`, `/sobre-nos`, `/#frentes`, `/cana-med-mulher`, `/#contato` (ou `#contato` local na página Mulher) e drawer mobile controlado por estado React.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/layout/Layout.test.tsx`
Expected: PASS (4 passed).

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/
git commit -m "feat(layout): add shared Header, Footer, and ScrollToAnchor components"
```

---

### Task 3: Painel Interativo "Frentes de Atuação" (`FrentesSection`) e Página Inicial (`HomePage`)

**Files:**
- Create: `src/components/home/FrentesSection.tsx`
- Create: `src/components/home/FrentesSection.test.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/HomePage.test.tsx`

**Interfaces:**
- Consumes: `BRAND_ASSETS` from `src/constants/assets.ts`.
- Produces:
  - `FrentesSection`: `export function FrentesSection(): JSX.Element`
  - `HomePage`: `export function HomePage(): JSX.Element`

- [ ] **Step 1: Write the failing tests `src/components/home/FrentesSection.test.tsx` and `src/pages/HomePage.test.tsx`**

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { FrentesSection } from './FrentesSection';

describe('FrentesSection Interactive Tabs (RN-002, CA-002)', () => {
  it('displays Frente 01 by default and switches panels on click and keyboard Enter/Space', () => {
    render(<FrentesSection />);

    const tab1 = screen.getByRole('tab', { name: /Frente 01/i });
    const tab2 = screen.getByRole('tab', { name: /Frente 02/i });
    const tab3 = screen.getByRole('tab', { name: /Frente 03/i });
    const tab4 = screen.getByRole('tab', { name: /Frente 04/i });

    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Uma recepção mais organizada desde o primeiro contato.')).toBeInTheDocument();

    fireEvent.click(tab2);
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Mais clareza para organizar a rotina de atendimento.')).toBeInTheDocument();

    fireEvent.keyDown(tab3, { key: 'Enter' });
    expect(tab3).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Cada etapa conectada à próxima.')).toBeInTheDocument();

    fireEvent.keyDown(tab4, { key: ' ' });
    expect(tab4).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Informações organizadas para apoiar o trabalho médico.')).toBeInTheDocument();
  });
});
```

E em `src/pages/HomePage.test.tsx`:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { HomePage } from './HomePage';

describe('HomePage ("/" - CA-001, CA-005)', () => {
  it('renders Hero, Cenário Real, Frentes de Atuação, Destaque Cana Med Mulher, and Contact section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Mais eficiência para quem dedica a vida a cuidar\./i })).toBeInTheDocument();
    expect(screen.getByText(/Clínicas não deveriam perder tempo precioso com processos manuais e dispersos\./i)).toBeInTheDocument();
    expect(screen.getByText(/Gestão com sensibilidade e acolhimento planejado para a saúde da mulher\./i)).toBeInTheDocument();
  });

  it('submits the institutional contact form and displays confirmation feedback', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Nome Completo/i), { target: { value: 'Dra. Camila Torres' } });
    fireEvent.change(screen.getByLabelText(/E-mail Profissional/i), { target: { value: 'camila@clinica.com.br' } });
    fireEvent.change(screen.getByLabelText(/Nome da Clínica/i), { target: { value: 'Clínica São Lucas' } });
    fireEvent.change(screen.getByLabelText(/Como podemos ajudar\?/i), { target: { value: 'Quero organizar a agenda e o prontuário.' } });

    fireEvent.click(screen.getByRole('button', { name: /Entre em contato/i }));

    expect(screen.getByText(/Mensagem recebida com sucesso! Em breve entraremos em contato\./i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/components/home/FrentesSection.test.tsx src/pages/HomePage.test.tsx`
Expected: FAIL with modules not found.

- [ ] **Step 3: Implement `FrentesSection.tsx` and `HomePage.tsx` matching `assets/prototypes/stitch/home.html`**

Fidelidade 1:1 a todos os textos, badges, cartões Bento (`Fluxo Operacional Integrado`, `+40% foco assistencial`, `Adaptação sem atrito`), 3 cards do Cenário Real + faixa LGPD, as 4 abas e painéis das Frentes de Atuação, o bloco de destaque `Cana Med Mulher` (usando `BRAND_ASSETS.mulherLogoLonga` e `BRAND_ASSETS.mulherLogoCurta`) e o formulário de contato institucional.

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/components/home/FrentesSection.test.tsx src/pages/HomePage.test.tsx`
Expected: PASS (3 passed).

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ src/pages/HomePage*
git commit -m "feat(home): implement HomePage and interactive FrentesSection from Stitch design"
```

---

### Task 4: Página "Sobre Nós" (`AboutPage`)

**Files:**
- Create: `src/pages/AboutPage.tsx`
- Create: `src/pages/AboutPage.test.tsx`

**Interfaces:**
- Consumes: `BRAND_ASSETS` from `src/constants/assets.ts`.
- Produces: `export function AboutPage(): JSX.Element`

- [ ] **Step 1: Write the failing test `src/pages/AboutPage.test.tsx`**

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { AboutPage } from './AboutPage';
import { BRAND_ASSETS } from '../constants/assets';

describe('AboutPage ("/sobre-nos" - CA-003)', () => {
  it('renders Origin & Purpose hero, the 3 engineering pillars, Cana Med Mulher highlight, and closing CTA', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /Tecnologia especializada para transformar a gestão em saúde\./i })
    ).toBeInTheDocument();

    expect(screen.getByText('Engenharia de Software com Propósito')).toBeInTheDocument();
    expect(screen.getByText('Superação de Processos Arcaicos')).toBeInTheDocument();
    expect(screen.getByText('Soluções Específicas por Realidade')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Gestão ginecológica pensada para a realidade das clínicas\./i })
    ).toBeInTheDocument();

    const mulherLogo = screen.getByRole('img', { name: /Logotipo Oficial Cana Med Mulher/i });
    expect(mulherLogo).toHaveAttribute('src', BRAND_ASSETS.mulherLogoLonga);

    const ctaMulher = screen.getByRole('link', { name: /Conheça a Cana Med Mulher/i });
    expect(ctaMulher).toHaveAttribute('href', '/cana-med-mulher');

    expect(
      screen.getByText(/Estamos desenvolvendo soluções a partir dos desafios reais de cada contexto da saúde\./i)
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/pages/AboutPage.test.tsx`
Expected: FAIL with module `./AboutPage` not found.

- [ ] **Step 3: Implement `src/pages/AboutPage.tsx` matching `assets/prototypes/stitch/sobre-nos.html`**

Reproduzir os 3 blocos estruturais de `sobre-nos.html`:
1. Bloco 1 (`ORIGEM & PROPÓSITO`): H1, parágrafo sobre a idealização por engenheiros de software e os 3 indicadores geométricos (`terminal`, `rule`, `hub`).
2. Bloco 2 (`NOSSA PRIMEIRA SOLUÇÃO`): Card com barra superior em degradê `from-[#d9298a] via-[#a83279] to-[#492268]`, logotipo `BRAND_ASSETS.mulherLogoLonga`, 3 pilares (`Agendamento e Cadastros Especializados`, `Fluxo Clínico Acolhedor`, `Privacidade e Cuidado Obstétrico`) e botão `"Conheça a Cana Med Mulher"` (`/cana-med-mulher`).
3. Bloco 3 (Encerramento): Ícone `lightbulb`, título e botão `"Conheça nossas soluções"` (`/#frentes`).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/pages/AboutPage.test.tsx`
Expected: PASS (1 passed).

- [ ] **Step 5: Commit**

```bash
git add src/pages/AboutPage*
git commit -m "feat(about): implement AboutPage (Sobre Nós) matching Stitch design"
```

---

### Task 5: Página "Cana Med Mulher" (`CanamedMulherPage`)

**Files:**
- Create: `src/pages/CanamedMulherPage.tsx`
- Create: `src/pages/CanamedMulherPage.test.tsx`

**Interfaces:**
- Consumes: `APP_SCREENSHOTS` from `src/constants/assets.ts`.
- Produces: `export function CanamedMulherPage(): JSX.Element`

- [ ] **Step 1: Write the failing test `src/pages/CanamedMulherPage.test.tsx`**

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { CanamedMulherPage } from './CanamedMulherPage';
import { APP_SCREENSHOTS } from '../constants/assets';

describe('CanamedMulherPage ("/cana-med-mulher" - CA-004, CA-005, CA-007)', () => {
  it('renders Hero with PEP mockup, 3 operational challenges, 4 real module showcases, 3 team profiles, and 3 institutional commitments', () => {
    render(
      <MemoryRouter>
        <CanamedMulherPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /Uma gestão mais organizada para quem cuida da saúde da mulher\./i })
    ).toBeInTheDocument();

    // 4 Real App Showcases
    expect(screen.getByText('01 — Organize a agenda e recepção')).toBeInTheDocument();
    expect(screen.getByText('02 — Gestão especializada gineco-obstétrica')).toBeInTheDocument();
    expect(screen.getByText('03 — Monitoramento de prazos e retornos clínicos')).toBeInTheDocument();
    expect(screen.getByText('04 — Gestão operacional e parâmetros da clínica')).toBeInTheDocument();

    // Verify local screenshot sources
    const imgs = screen.getAllByRole('img');
    const srcs = imgs.map((img) => img.getAttribute('src'));
    expect(srcs).toContain(APP_SCREENSHOTS.agendaRecepcao);
    expect(srcs).toContain(APP_SCREENSHOTS.fichaGinecologica);
    expect(srcs).toContain(APP_SCREENSHOTS.medicoRetornos);
    expect(srcs).toContain(APP_SCREENSHOTS.appConfiguracoes);

    // Team profiles & commitments
    expect(screen.getByText('Gestão da clínica')).toBeInTheDocument();
    expect(screen.getByText('Recepção e equipe administrativa')).toBeInTheDocument();
    expect(screen.getByText('Profissionais de saúde')).toBeInTheDocument();
    expect(screen.getByText('Usabilidade')).toBeInTheDocument();
    expect(screen.getByText('Privacidade')).toBeInTheDocument();
    expect(screen.getByText('Segurança')).toBeInTheDocument();
  });

  it('submits the Cana Med Mulher presentation request form and shows confirmation message', () => {
    render(
      <MemoryRouter>
        <CanamedMulherPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Nome completo/i), { target: { value: 'Dra. Mariana Castro' } });
    fireEvent.change(screen.getByLabelText(/E-mail corporativo/i), { target: { value: 'mariana@clinica.com.br' } });
    fireEvent.change(screen.getByLabelText(/Telefone \/ WhatsApp/i), { target: { value: '(81) 99999-9999' } });
    fireEvent.change(screen.getByLabelText(/Nome da Clínica \/ Especialidade/i), {
      target: { value: 'Clínica da Mulher Santa Clara' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Quero conhecer a solução/i }));

    expect(
      screen.getByText(/Obrigado pelo interesse! Nossa equipe entrará em contato em breve\./i)
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/pages/CanamedMulherPage.test.tsx`
Expected: FAIL with module `./CanamedMulherPage` not found.

- [ ] **Step 3: Implement `src/pages/CanamedMulherPage.tsx` matching `assets/prototypes/stitch/canamed-mulher.html`**

Reproduzir todas as 6 seções de `canamed-mulher.html`, utilizando `APP_SCREENSHOTS` para os 4 módulos reais e o Browser Mockup do Hero, preservando o gradiente `.brand-gradient-text` e `.brand-button-gradient` e substituindo o `alert()` por um banner de confirmação inline acessível (`role="status"`).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/pages/CanamedMulherPage.test.tsx`
Expected: PASS (2 passed).

- [ ] **Step 5: Commit**

```bash
git add src/pages/CanamedMulherPage*
git commit -m "feat(mulher): implement CanamedMulherPage with real app showcase modules"
```

---

### Task 6: Roteamento Principal (`App.tsx`), Verificação de Ativos e Testes de Integração de Rotas

**Files:**
- Create: `src/App.tsx`
- Create: `src/main.tsx`
- Create: `src/App.test.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer`, `ScrollToAnchor`, `HomePage`, `AboutPage`, `CanamedMulherPage`.
- Produces: `export function App(): JSX.Element`

- [ ] **Step 1: Write the failing integration test `src/App.test.tsx`**

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { AppRoutes } from './App';

describe('App Multi-Page Routing & Local Asset Integrity (CA-001..CA-007)', () => {
  it('navigates cleanly between Home ("/"), Sobre Nós ("/sobre-nos"), and Cana Med Mulher ("/cana-med-mulher") without any external googleusercontent image URLs', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // Home
    expect(screen.getByRole('heading', { name: /Mais eficiência para quem dedica a vida a cuidar\./i })).toBeInTheDocument();

    // Navigate to Sobre Nós
    fireEvent.click(screen.getAllByRole('link', { name: /^Sobre Nós$/i })[0]);
    expect(
      screen.getByRole('heading', { name: /Tecnologia especializada para transformar a gestão em saúde\./i })
    ).toBeInTheDocument();

    // Navigate to Cana Med Mulher via page CTA
    fireEvent.click(screen.getByRole('link', { name: /Conheça a Cana Med Mulher/i }));
    expect(
      screen.getByRole('heading', { name: /Uma gestão mais organizada para quem cuida da saúde da mulher\./i })
    ).toBeInTheDocument();

    // Ensure zero external temporary Stitch URLs exist in DOM
    const allImages = container.querySelectorAll('img');
    allImages.forEach((img) => {
      const src = img.getAttribute('src') ?? '';
      expect(src).not.toContain('googleusercontent.com');
      expect(src.startsWith('/assets/')).toBe(true);
    });
  });

  it('redirects unknown routes safely back to HomePage', () => {
    render(
      <MemoryRouter initialEntries={['/rota-inexistente']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Mais eficiência para quem dedica a vida a cuidar\./i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/App.test.tsx`
Expected: FAIL with module `./App` not found.

- [ ] **Step 3: Implement `src/App.tsx` and `src/main.tsx`**

Configurar `AppRoutes` com `<Header />`, `<ScrollToAnchor />`, `<Routes>` para `/`, `/sobre-nos`, `/cana-med-mulher`, rota curinga `*` redirecionando para `<Navigate to="/" replace />`, atualização automática de `document.title` por rota e `<Footer />`.

- [ ] **Step 4: Run full test suite and production build to verify 100% pass**

Run: `npm test -- --run && npm run build`
Expected: PASS (todas as suítes de teste aprovadas e build Vite gerado em `dist/` sem erros TypeScript).

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/main.tsx src/App.test.tsx
git commit -m "feat(app): wire multi-page router and full route integration tests"
```
