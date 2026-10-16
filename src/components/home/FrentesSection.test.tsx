import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { FrentesSection } from './FrentesSection';

describe('FrentesSection Interactive Tabs (RN-002, CA-002)', () => {
  it('displays Frente 01 by default and switches panels on click and keyboard Enter/Space', () => {
    render(
      <MemoryRouter>
        <FrentesSection />
      </MemoryRouter>
    );

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
