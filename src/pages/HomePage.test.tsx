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
