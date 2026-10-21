import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_ASSETS } from '../constants/assets';

export function AboutPage(): JSX.Element {
  return (
    <main className="flex-grow w-full">
      {/* BLOCO 1: NOSSA ORIGEM (Hero Editorial Minimalista e Sofisticado) */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-24 overflow-hidden bg-gradient-to-b from-surface via-surface-canvas to-surface border-b border-border-subtle">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-mint-subtle/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-subtle border border-border-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wide font-semibold">
                ORIGEM &amp; PROPÓSITO
              </span>
            </div>
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-graphite-text tracking-tight mb-8">
              Tecnologia especializada para transformar a gestão em saúde.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12 max-w-3xl">
              A Cana Med foi idealizada por engenheiros de software com anos de experiência no mercado, que, incomodados com sistemas ultrapassados utilizados por grandes hospitais e com a dependência de processos manuais em clínicas de pequeno e médio porte, decidiram direcionar seus esforços ao desenvolvimento de soluções especializadas para cada realidade.
            </p>
            {/* Três Indicadores Discretos e Geométricos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border-subtle">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-mint-subtle flex items-center justify-center shrink-0 border border-border-subtle text-primary">
                  <span className="material-symbols-outlined text-xl">terminal</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-graphite-text mb-1">
                    Engenharia de Software com Propósito
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted">
                    Arquiteturas robustas aliadas à simplicidade do uso clínico diário.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-mint-subtle flex items-center justify-center shrink-0 border border-border-subtle text-primary">
                  <span className="material-symbols-outlined text-xl">rule</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-graphite-text mb-1">
                    Superação de Processos Arcaicos
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted">
                    Substituição de planilhas dispersas e burocracia por clareza sistêmica.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-mint-subtle flex items-center justify-center shrink-0 border border-border-subtle text-primary">
                  <span className="material-symbols-outlined text-xl">hub</span>
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-graphite-text mb-1">
                    Soluções Específicas por Realidade
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted">
                    Desenvolvimento adaptado às necessidades genuínas de cada setor médico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2: TRANSIÇÃO & DESTAQUE VISUAL "CANA MED MULHER" */}
      <section className="py-20 md:py-28 bg-surface-card border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-surface to-surface-canvas p-8 md:p-12 shadow-sm relative overflow-hidden">
            {/* Barra sutil com degradê sutil Cana Med Mulher */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d9298a] via-[#a83279] to-[#492268]" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Lado da Imagem / Logo Oficial */}
              <div className="lg:col-span-5 flex flex-col items-start justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-6">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                    NOSSA PRIMEIRA SOLUÇÃO
                  </span>
                </div>
                <div className="bg-surface-card p-6 rounded-xl border border-border-subtle shadow-sm mb-4 inline-block w-full max-w-sm">
                  <img
                    alt="Logotipo Oficial Cana Med Mulher"
                    className="h-14 md:h-18 w-auto object-contain mx-auto"
                    src={BRAND_ASSETS.mulherLogoLonga}
                  />
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-caption font-caption bg-secondary/10 text-secondary font-semibold">
                  Iniciativa Especializada em Saúde Feminina
                </span>
              </div>
              {/* Lado de Conteúdo Editorial */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-graphite-text mb-4">
                  Gestão ginecológica pensada para a realidade das clínicas.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-4">
                  Uma solução especializada na gestão de clínicas ginecológicas e obstétricas, idealizada para aproximar tecnologia, organização e a realidade de quem cuida da saúde da mulher.
                </p>
                <p className="font-body-md text-body-md text-text-muted leading-relaxed mb-8">
                  A Cana Med Mulher é a primeira iniciativa da Cana Med: uma solução voltada à organização da rotina de clínicas ginecológicas e obstétricas, considerando os processos de agendamento, cadastro e fluxo de atendimento.
                </p>
                {/* Três Pilares da Solução */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-border-subtle">
                  <div className="p-3.5 rounded-lg bg-surface-card border border-border-subtle">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined text-xl">calendar_today</span>
                    </div>
                    <h4 className="font-label-md text-label-md text-graphite-text font-semibold">
                      Agendamento e Cadastros Especializados
                    </h4>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-card border border-border-subtle">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined text-xl">favorite</span>
                    </div>
                    <h4 className="font-label-md text-label-md text-graphite-text font-semibold">
                      Fluxo Clínico Acolhedor
                    </h4>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-card border border-border-subtle">
                    <div className="text-primary mb-2">
                      <span className="material-symbols-outlined text-xl">shield_with_heart</span>
                    </div>
                    <h4 className="font-label-md text-label-md text-graphite-text font-semibold">
                      Privacidade e Cuidado Obstétrico
                    </h4>
                  </div>
                </div>
                <div>
                  <Link
                    className="inline-flex items-center gap-2 bg-primary text-on-primary text-label-md font-label-md px-6 py-3 rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all duration-150 shadow-sm group"
                    to="/cana-med-mulher"
                  >
                    <span>Conheça a Cana Med Mulher</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3: ENCERRAMENTO (Curto e direto) */}
      <section className="py-16 md:py-20 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-mint-subtle flex items-center justify-center text-primary mb-5 border border-border-subtle">
            <span className="material-symbols-outlined text-2xl">lightbulb</span>
          </div>
          <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-graphite-text mb-6 max-w-2xl leading-snug">
            Estamos desenvolvendo soluções a partir dos desafios reais de cada contexto da saúde.
          </h3>
          <Link
            className="inline-flex items-center justify-center bg-transparent border border-primary text-primary text-label-md font-label-md px-8 py-3 rounded-lg hover:bg-mint-subtle active:scale-[0.98] transition-all duration-150 shadow-sm"
            to="/#frentes"
          >
            Conheça nossas soluções
          </Link>
        </div>
      </section>
    </main>
  );
}
