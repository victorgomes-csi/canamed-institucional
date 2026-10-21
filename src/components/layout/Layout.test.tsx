import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToAnchor } from './ScrollToAnchor';
import { BRAND_ASSETS } from '../../constants/assets';
import { CONTACT_INFO } from '../../constants/contact';

describe('Header & Footer Shared Layout (RN-003, CA-006)', () => {
  it('renders institutional Cana Med logo on "/" and links to main routes', () => {
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

  it('renders Instagram link and contact phone in Header', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    const instagramLinks = screen.getAllByRole('link', { name: /Instagram/i });
    expect(instagramLinks[0]).toHaveAttribute('href', CONTACT_INFO.instagramUrl);
    expect(instagramLinks[0]).toHaveAttribute('target', '_blank');
    expect(screen.getAllByText(CONTACT_INFO.phoneFormatted).length).toBeGreaterThan(0);
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

  it('renders Footer with tagline, navigation links, Instagram link, phone, and LGPD/CFM badges', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Eficiência para quem mais precisa/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/LGPD/i)).toBeInTheDocument();
    expect(screen.getByText(CONTACT_INFO.phoneFormatted)).toBeInTheDocument();
    expect(screen.getAllByText(CONTACT_INFO.instagramHandle).length).toBeGreaterThan(0);
    const instagramLinks = screen.getAllByRole('link', { name: /Instagram/i });
    expect(instagramLinks[0]).toHaveAttribute('href', CONTACT_INFO.instagramUrl);
  });
});

describe('ScrollToAnchor', () => {
  let scrollToSpy: any;

  beforeEach(() => {
    scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('scrolls to top when hash is empty', () => {
    render(
      <MemoryRouter initialEntries={['/sobre-nos']}>
        <ScrollToAnchor />
      </MemoryRouter>
    );
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
  });

  it('scrolls to element when hash is present', () => {
    const targetElement = document.createElement('div');
    targetElement.id = 'frentes';
    document.body.appendChild(targetElement);

    const scrollIntoViewSpy = vi.fn();
    targetElement.scrollIntoView = scrollIntoViewSpy;

    render(
      <MemoryRouter initialEntries={['/#frentes']}>
        <ScrollToAnchor />
      </MemoryRouter>
    );

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    document.body.removeChild(targetElement);
  });
});
