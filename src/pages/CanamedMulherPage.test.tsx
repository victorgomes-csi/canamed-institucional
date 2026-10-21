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

    expect(screen.getByText('01 — Organize a agenda e recepção')).toBeInTheDocument();
    expect(screen.getByText('02 — Gestão especializada gineco-obstétrica')).toBeInTheDocument();
    expect(screen.getByText('03 — Monitoramento de prazos e retornos clínicos')).toBeInTheDocument();
    expect(screen.getByText('04 — Visão geral da clínica e indicadores em tempo real')).toBeInTheDocument();

    const imgs = screen.getAllByRole('img');
    const srcs = imgs.map((img) => img.getAttribute('src'));
    expect(srcs).toContain(APP_SCREENSHOTS.agendaRecepcao);
    expect(srcs).toContain(APP_SCREENSHOTS.fichaGinecologica);
    expect(srcs).toContain(APP_SCREENSHOTS.medicoRetornos);
    expect(srcs).toContain(APP_SCREENSHOTS.appDashboard);

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
