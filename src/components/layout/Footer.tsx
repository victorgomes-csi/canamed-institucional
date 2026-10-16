import type { JSX } from "react";
import { Link } from "react-router-dom";
import { BRAND_ASSETS } from "../../constants/assets";

export function Footer(): JSX.Element {
  return (
    <footer className="docked full-width bottom bg-surface-subtle border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-subtle">
          {/* Coluna Institucional Principal */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={BRAND_ASSETS.canamedLogoFull}
                alt="Cana Med Gestão em Saúde"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-body-sm font-body-sm text-text-muted max-w-sm leading-relaxed">
              Eficiência para quem mais precisa. Transformando a gestão em saúde através da organização responsável e do respeito genuíno aos profissionais e pacientes.
            </p>
          </div>

          {/* Links Institucionais */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-title-md font-title-md text-graphite-text">Navegação</h4>
            <ul className="space-y-2 text-body-sm font-body-sm">
              <li>
                <Link to="/" className="text-text-muted hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-text-muted hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/#frentes" className="text-text-muted hover:text-primary transition-colors">
                  Frentes de Atuação
                </Link>
              </li>
              <li>
                <Link to="/cana-med-mulher" className="text-text-muted hover:text-primary transition-colors">
                  Cana Med Mulher
                </Link>
              </li>
              <li>
                <Link to="/#contato" className="text-text-muted hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Links de Apoio & Ética */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-title-md font-title-md text-graphite-text">Compromisso & Transparência</h4>
            <p className="text-body-sm font-body-sm text-text-muted leading-relaxed">
              Atuação ética alinhada às melhores práticas regulatórias em saúde no Brasil, garantindo a proteção e integridade de dados operacionais.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-surface-card border border-border-subtle text-caption font-caption text-secondary font-semibold">
                LGPD em Saúde
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-card border border-border-subtle text-caption font-caption text-primary font-semibold">
                Rigor Clínico
              </span>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm font-label-sm text-text-muted">
          <div>
            © 2025 Cana Med Gestão em Saúde. Todos os direitos reservados. Eficiência para quem mais precisa.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/#contato" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link to="/#contato" className="hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link to="/#contato" className="hover:text-primary transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
