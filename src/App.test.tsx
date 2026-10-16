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

  it('updates document.title accordingly for each route', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toBe('Cana Med — Eficiência para quem mais precisa | Gestão em Saúde');
    unmount();

    const { unmount: unmountSobre } = render(
      <MemoryRouter initialEntries={['/sobre-nos']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toBe('Sobre Nós — Cana Med | Gestão em Saúde');
    unmountSobre();

    const { unmount: unmountMulher } = render(
      <MemoryRouter initialEntries={['/cana-med-mulher']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(document.title).toBe('Cana Med Mulher • Eficiência e Gestão Especializada em Saúde');
    unmountMulher();
  });
});
