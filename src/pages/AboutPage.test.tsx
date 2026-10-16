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

    const ctaSolucoes = screen.getByRole('link', { name: /Conheça nossas soluções/i });
    expect(ctaSolucoes).toHaveAttribute('href', '/#frentes');
  });
});
