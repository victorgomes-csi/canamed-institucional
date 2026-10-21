import { useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND_ASSETS } from "../../constants/assets";
import { CONTACT_INFO } from "../../constants/contact";
import { InstagramIcon } from "../common/InstagramIcon";

export function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const isMulherPage = pathname === "/cana-med-mulher";
  const isSobrePage = pathname === "/sobre-nos";
  const isInicioActive = pathname === "/" && (!hash || hash === "#inicio");
  const isFrentesActive = pathname === "/" && hash === "#frentes";
  const isContatoActive = hash === "#contato";

  const contactLink = isMulherPage ? "/cana-med-mulher#contato" : "/#contato";

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface/85 backdrop-blur-md border-b border-border-subtle shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 w-full">
        {/* Brand Logo Oficial */}
        <Link
          to={isMulherPage ? "/cana-med-mulher" : "/"}
          className="flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1 active:scale-[0.98] transition-transform duration-150"
        >
          <img
            src={isMulherPage ? BRAND_ASSETS.mulherLogoLonga : BRAND_ASSETS.canamedLogoFull}
            alt={isMulherPage ? "Cana Med Mulher" : "Cana Med - Eficiência para quem mais precisa"}
            className="h-8 md:h-9 lg:h-10 w-auto max-w-[210px] object-contain transition-all"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 text-label-md font-label-md">
          <Link
            to="/"
            className={
              isInicioActive
                ? "nav-item text-primary font-bold border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
                : "nav-item text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
            }
          >
            Início
          </Link>
          <Link
            to="/sobre-nos"
            className={
              isSobrePage
                ? "nav-item text-primary font-bold border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
                : "nav-item text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
            }
          >
            Sobre Nós
          </Link>
          <Link
            to="/#frentes"
            className={
              isFrentesActive
                ? "nav-item text-primary font-bold border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
                : "nav-item text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
            }
          >
            Frentes de Atuação
          </Link>
          <Link
            to="/cana-med-mulher"
            className={
              isMulherPage
                ? "nav-item text-[#b8186c] font-bold border-b-2 border-[#b8186c] pb-1 active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
                : "nav-item text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap"
            }
          >
            <span>Cana Med Mulher</span>
            {!isMulherPage && <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>}
          </Link>
          <Link
            to={contactLink}
            className={
              isContatoActive
                ? "nav-item text-primary font-bold border-b-2 border-primary pb-1 active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
                : "nav-item text-on-surface-variant font-medium hover:text-primary transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
            }
          >
            Contato
          </Link>
        </nav>

        {/* Trailing Action & Social */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
          {/* Instagram Icon Link */}
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Cana Med (@canamedsolutions)"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-lg text-graphite-text hover:text-primary hover:bg-surface-subtle transition-all duration-150 active:scale-[0.95]"
            title="Siga @canamedsolutions no Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          {/* Telefone / WhatsApp Direto */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Telefone e WhatsApp: ${CONTACT_INFO.phoneFormatted}`}
            className="hidden lg:inline-flex items-center gap-1.5 text-label-sm font-label-sm text-graphite-text hover:text-primary px-2.5 py-1.5 rounded-lg hover:bg-surface-subtle transition-all whitespace-nowrap"
            title="Fale no WhatsApp"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">call</span>
            <span className="font-semibold">{CONTACT_INFO.phoneFormatted}</span>
          </a>

          <Link
            to={contactLink}
            className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary text-label-md font-label-md px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors duration-150 active:scale-[0.98] shadow-sm whitespace-nowrap"
          >
            Fale com a Cana Med
          </Link>

          <button
            id="mobile-menu-toggle"
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu de navegação"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-graphite-text hover:bg-surface-subtle focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="material-symbols-outlined text-headline-md">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={(isMobileMenuOpen ? "block" : "hidden") + " md:hidden border-t border-border-subtle bg-surface-card px-6 py-6 space-y-4 shadow-lg"}
      >
        <nav className="flex flex-col space-y-3 text-label-md font-label-md">
          <Link
            to="/"
            onClick={closeMenu}
            className={
              isInicioActive
                ? "mobile-nav-link text-primary font-bold py-2 border-l-4 border-primary pl-3"
                : "mobile-nav-link text-graphite-text hover:text-primary py-2 pl-4"
            }
          >
            Início
          </Link>
          <Link
            to="/sobre-nos"
            onClick={closeMenu}
            className={
              isSobrePage
                ? "mobile-nav-link text-primary font-bold py-2 border-l-4 border-primary pl-3"
                : "mobile-nav-link text-graphite-text hover:text-primary py-2 pl-4"
            }
          >
            Sobre Nós
          </Link>
          <Link
            to="/#frentes"
            onClick={closeMenu}
            className={
              isFrentesActive
                ? "mobile-nav-link text-primary font-bold py-2 border-l-4 border-primary pl-3"
                : "mobile-nav-link text-graphite-text hover:text-primary py-2 pl-4"
            }
          >
            Frentes de Atuação
          </Link>
          <Link
            to="/cana-med-mulher"
            onClick={closeMenu}
            className={
              isMulherPage
                ? "mobile-nav-link text-[#b8186c] font-bold py-2 border-l-2 border-[#b8186c] pl-2"
                : "mobile-nav-link text-graphite-text hover:text-primary py-2 pl-4 flex items-center justify-between"
            }
          >
            <span>Cana Med Mulher</span>
            {!isMulherPage && (
              <span className="text-caption font-caption text-secondary bg-surface-subtle px-2 py-0.5 rounded">
                Especializada
              </span>
            )}
          </Link>
          <Link
            to={contactLink}
            onClick={closeMenu}
            className={
              isContatoActive
                ? "mobile-nav-link text-primary font-bold py-2 border-l-4 border-primary pl-3"
                : "mobile-nav-link text-graphite-text hover:text-primary py-2 pl-4"
            }
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Contact & Social Details */}
        <div className="pt-4 border-t border-border-subtle space-y-3">
          <div className="flex flex-col gap-2.5 px-2 py-1 text-body-sm font-body-sm text-graphite-text">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">call</span>
              <span className="font-semibold">{CONTACT_INFO.phoneFormatted}</span>
            </a>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Cana Med"
              className="flex items-center gap-2 text-graphite-text hover:text-primary transition-colors"
            >
              <InstagramIcon className="w-5 h-5 text-primary" />
              <span>@canamedsolutions</span>
            </a>
          </div>

          <Link
            to={contactLink}
            onClick={closeMenu}
            className="mobile-nav-link flex w-full items-center justify-center bg-primary-container text-on-primary text-label-md font-label-md py-3 rounded-lg text-center"
          >
            Fale com a Cana Med
          </Link>
        </div>
      </div>
    </header>
  );
}
