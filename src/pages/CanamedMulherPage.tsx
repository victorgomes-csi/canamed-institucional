import { useState, type FormEvent, type JSX } from 'react';
import { APP_SCREENSHOTS } from '../constants/assets';
import { CONTACT_INFO } from '../constants/contact';
import { InstagramIcon } from '../components/common/InstagramIcon';

export function CanamedMulherPage(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      clinic: '',
      notes: '',
    });
  };

  return (
    <main className="flex-grow w-full">
      {/* SEÇÃO 1: HERO (Apresentação da Solução) */}
      <section
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-surface-canvas to-surface-canvas"
        id="inicio"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Copy & Editorial Context */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full brand-tag-bg border border-[#e11d74]/20 text-[#a3155b]">
                <span className="w-2 h-2 rounded-full bg-[#e11d74] animate-pulse" />
                <span className="text-caption font-caption tracking-wider uppercase font-bold">
                  CANA MED • SOLUÇÃO ESPECIALIZADA
                </span>
              </div>
              <h1 className="text-headline-lg-mobile md:text-display-hero font-display-hero text-graphite-text tracking-tight leading-tight">
                Uma gestão mais organizada para quem cuida da{' '}
                <span className="brand-gradient-text">saúde da mulher.</span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
                A Cana Med Mulher é uma solução em desenvolvimento, pensada para aproximar a tecnologia da rotina de
                clínicas ginecológicas e obstétricas, conectando etapas importantes da gestão e do fluxo de atendimento.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  className="brand-button-gradient text-on-primary text-label-md font-label-md px-7 py-3.5 rounded-lg text-center shadow-sm hover:shadow active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  href="#conheca-app"
                >
                  <span>Explore a solução</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </a>
                <a
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-border-muted hover:border-primary text-graphite-text hover:text-primary bg-surface-card hover:bg-surface-subtle font-label-md text-label-md active:scale-[0.98] transition-all"
                  href="#contato"
                >
                  Fale com a Cana Med
                </a>
              </div>
              {/* Proof points badges */}
              <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center gap-6 text-text-muted text-body-sm font-body-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#008080] text-[20px]">verified</span>
                  <span>Alinhado às diretrizes CFM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#008080] text-[20px]">lock</span>
                  <span>Embasamento LGPD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#008080] text-[20px]">female</span>
                  <span>Fluxo Obstétrico &amp; Ginecológico</span>
                </div>
              </div>
            </div>

            {/* Right: Real App Screenshot in Editorial Browser Mockup */}
            <div className="lg:col-span-6 relative">
              {/* Subtle decorative backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#e11d74]/10 via-[#008080]/5 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="bg-surface-card rounded-2xl border border-border-subtle shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Browser Header Bar */}
                <div className="bg-[#F8FAFA] px-4 py-3 border-b border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#CBD5E1]" />
                    <span className="w-3 h-3 rounded-full bg-[#CBD5E1]" />
                    <span className="w-3 h-3 rounded-full bg-[#CBD5E1]" />
                    <span className="text-caption font-caption text-text-muted ml-2">app.canamed.local/prontuario</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted text-caption font-caption">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    <span>Ambiente Clínico Seguro</span>
                  </div>
                </div>
                {/* Screen Image */}
                <div className="relative bg-surface-subtle p-1 md:p-2">
                  <img
                    alt="Prontuário Eletrônico do Paciente - Cana Med Mulher"
                    className="w-full h-auto rounded-lg shadow-sm border border-border-subtle object-cover"
                    src={APP_SCREENSHOTS.fichaGinecologica}
                  />
                </div>
                {/* Floating Micro Pill */}
                <div className="bg-surface-card/95 backdrop-blur-sm border-t border-border-subtle p-3.5 px-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <p className="text-body-sm font-body-sm text-graphite-text font-medium">
                      Prontuário com Ficha Gineco-Obstétrica Longitudinal ativa
                    </p>
                  </div>
                  <span className="text-caption font-caption text-[#008080] bg-[#E6FFFA] px-2.5 py-1 rounded-full font-semibold">
                    PEP Ativo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: A Realidade das Clínicas */}
      <section className="py-20 md:py-28 bg-white border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-caption font-caption tracking-wider uppercase font-bold text-primary">
              Contexto Operacional
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text mt-2 mb-4 tracking-tight">
              Uma rotina que exige organização em cada etapa.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A gestão de uma clínica envolve muito mais do que consultas. Agendamentos, informações das pacientes e
              organização do atendimento precisam funcionar de maneira coordenada para apoiar o trabalho da equipe.
            </p>
          </div>

          {/* 3 Operational Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloco 01 */}
            <div className="bg-surface-canvas rounded-xl p-8 border border-border-subtle hover:border-[#008080]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-card border border-border-subtle flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">calendar_month</span>
                </div>
                <span className="text-caption font-caption tracking-widest text-[#a3155b] uppercase font-bold">
                  Desafio 01
                </span>
                <h3 className="text-headline-sm font-headline-sm text-graphite-text mt-1 mb-3">Agenda e consultas</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Organizar os compromissos e acompanhar a rotina de atendimento, evitando sobreposições e controlando
                  bloqueios e retornos com precisão.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-subtle/80 flex items-center text-text-muted text-body-sm font-body-sm gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                <span>Fluxo contínuo sem rupturas</span>
              </div>
            </div>

            {/* Bloco 02 */}
            <div className="bg-surface-canvas rounded-xl p-8 border border-border-subtle hover:border-[#008080]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-card border border-border-subtle flex items-center justify-center text-[#7c2d8c] mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">clinical_notes</span>
                </div>
                <span className="text-caption font-caption tracking-widest text-[#a3155b] uppercase font-bold">
                  Desafio 02
                </span>
                <h3 className="text-headline-sm font-headline-sm text-graphite-text mt-1 mb-3">
                  Informações organizadas
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Reduzir a dispersão de informações administrativas e facilitar sua consulta rápida e estruturada pela
                  equipe autorizada.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-subtle/80 flex items-center text-text-muted text-body-sm font-body-sm gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                <span>Dados clínicos unificados</span>
              </div>
            </div>

            {/* Bloco 03 */}
            <div className="bg-surface-canvas rounded-xl p-8 border border-border-subtle hover:border-[#008080]/40 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-card border border-border-subtle flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">account_tree</span>
                </div>
                <span className="text-caption font-caption tracking-widest text-[#a3155b] uppercase font-bold">
                  Desafio 03
                </span>
                <h3 className="text-headline-sm font-headline-sm text-graphite-text mt-1 mb-3">Fluxo de atendimento</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Apoiar a organização das etapas entre o agendamento prévio, a recepção física ou virtual e a consulta
                  especializada com o médico.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-subtle/80 flex items-center text-text-muted text-body-sm font-body-sm gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                <span>Integração ponta a ponta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: Conheça a Cana Med Mulher por Dentro (Prints Reais em Browser Frames) */}
      <section className="py-24 bg-surface-canvas relative" id="conheca-app">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full brand-tag-bg border border-[#e11d74]/20 text-[#a3155b] mb-4">
              <span className="text-caption font-caption tracking-wider uppercase font-bold">
                Demonstração Interativa
              </span>
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text tracking-tight mb-4">
              Conheça a Cana Med Mulher por dentro.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Uma interface pensada para tornar a rotina da clínica mais clara, organizada e intuitiva. Veja as telas
              reais que estruturam o dia a dia da clínica.
            </p>
          </div>

          {/* Demonstration Flow: 4 Showcase Modules */}
          <div className="space-y-24">
            {/* Módulo 01: Agenda & Recepção */}
            <div className="bg-surface-card rounded-2xl border border-border-subtle p-6 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-caption font-caption uppercase tracking-wider font-bold text-[#b8186c]">
                    Módulo 01
                  </span>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    01 — Organize a agenda e recepção
                  </h3>
                  <p className="text-body-lg font-body-lg text-on-surface-variant">
                    Visualize a grade de horários, bloqueios e acompanhe o fluxo da recepção em tempo real.
                    Acompanhamento diário e semanal por profissional de saúde.
                  </p>
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">view_day</span>
                      <span>Alternância rápida entre visão diária e semanal com bloqueio seguro de horários</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">filter_list</span>
                      <span>Filtro dinâmico por corpo médico da clínica e exportação instantânea de relatórios</span>
                    </div>
                  </div>
                </div>

                {/* Screenshot Frame */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-border-subtle bg-surface-canvas overflow-hidden shadow-md">
                    <div className="bg-[#F0F4F4] px-4 py-2.5 border-b border-border-subtle flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="text-caption font-caption text-text-muted ml-2">
                          Agenda &amp; Recepção • Visão Geral
                        </span>
                      </div>
                      <span className="text-caption font-caption font-semibold text-primary">09_app_agenda_recepcao</span>
                    </div>
                    <img
                      alt="Tela de Agenda de Consultas e Fila do Dia - Cana Med Mulher"
                      className="w-full h-auto object-cover"
                      src={APP_SCREENSHOTS.agendaRecepcao}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 02: Gestão Gineco-Obstétrica */}
            <div className="bg-surface-card rounded-2xl border border-border-subtle p-6 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Screenshot Frame on Left for Asymmetry */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="rounded-xl border border-border-subtle bg-surface-canvas overflow-hidden shadow-md">
                    <div className="bg-[#F0F4F4] px-4 py-2.5 border-b border-border-subtle flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="text-caption font-caption text-text-muted ml-2">
                          PEP • Ficha Gineco-Obstétrica Longitudinal
                        </span>
                      </div>
                      <span className="text-caption font-caption font-semibold text-[#b8186c]">
                        22_medico_ficha_ginecologica
                      </span>
                    </div>
                    <img
                      alt="Prontuário com Ficha Gineco-Obstétrica Longitudinal"
                      className="w-full h-auto object-cover"
                      src={APP_SCREENSHOTS.fichaGinecologica}
                    />
                  </div>
                </div>

                {/* Content on Right */}
                <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                  <span className="text-caption font-caption uppercase tracking-wider font-bold text-[#b8186c]">
                    Módulo 02
                  </span>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    02 — Gestão especializada gineco-obstétrica
                  </h3>
                  <p className="text-body-lg font-body-lg text-on-surface-variant">
                    Ficha clínica longitudinal com histórico obstétrico (GPA), padrão menstrual, rastreamento preventivo
                    e receitas estruturadas.
                  </p>
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-[#7c2d8c] text-[20px] mt-0.5">pregnant_woman</span>
                      <span>
                        Registro obstétrico completo: Gestações, Partos (Cesáreas/Normais), Abortos e Nascidos Vivos
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-[#7c2d8c] text-[20px] mt-0.5">water_drop</span>
                      <span>Mapeamento de padrão menstrual, menarca, fluxo, dismenorreia e método contraceptivo</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-[#7c2d8c] text-[20px] mt-0.5">shield</span>
                      <span>Rastreamento preventivo oncológico e anexo direto de exames anteriores</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 03: Monitoramento de Prazos e Retornos */}
            <div className="bg-surface-card rounded-2xl border border-border-subtle p-6 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-caption font-caption uppercase tracking-wider font-bold text-[#b8186c]">
                    Módulo 03
                  </span>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    03 — Monitoramento de prazos e retornos clínicos
                  </h3>
                  <p className="text-body-lg font-body-lg text-on-surface-variant">
                    Acompanhamento da carência e conformidade com as diretrizes de retorno do Conselho Federal de Medicina
                    (CFM).
                  </p>
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">timer</span>
                      <span>Contador automático de dias decorridos e prazo restante da carência de 30 dias</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">event_repeat</span>
                      <span>Acesso direto ao prontuário ou agendamento de retorno com 1 clique</span>
                    </div>
                  </div>
                </div>

                {/* Screenshot Frame */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-border-subtle bg-surface-canvas overflow-hidden shadow-md">
                    <div className="bg-[#F0F4F4] px-4 py-2.5 border-b border-border-subtle flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="text-caption font-caption text-text-muted ml-2">
                          Gestão de Retornos &amp; Prazos
                        </span>
                      </div>
                      <span className="text-caption font-caption font-semibold text-primary">20_medico_retornos</span>
                    </div>
                    <img
                      alt="Gestão de Retornos e Prazos com Carência CFM"
                      className="w-full h-auto object-cover"
                      src={APP_SCREENSHOTS.medicoRetornos}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 04: Gestão Operacional e Configurações */}
            <div className="bg-surface-card rounded-2xl border border-border-subtle p-6 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Screenshot Frame on Left */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="rounded-xl border border-border-subtle bg-surface-canvas overflow-hidden shadow-md">
                    <div className="bg-[#F0F4F4] px-4 py-2.5 border-b border-border-subtle flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        <span className="text-caption font-caption text-text-muted ml-2">
                          Configurações &amp; Parâmetros Institucionais
                        </span>
                      </div>
                      <span className="text-caption font-caption font-semibold text-[#008080]">
                        14_app_configuracoes
                      </span>
                    </div>
                    <img
                      alt="Painel de Configurações Operacionais da Clínica"
                      className="w-full h-auto object-cover"
                      src={APP_SCREENSHOTS.appConfiguracoes}
                    />
                  </div>
                </div>

                {/* Content on Right */}
                <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                  <span className="text-caption font-caption uppercase tracking-wider font-bold text-[#b8186c]">
                    Módulo 04
                  </span>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    04 — Gestão operacional e parâmetros da clínica
                  </h3>
                  <p className="text-body-lg font-body-lg text-on-surface-variant">
                    Centralização de convênios atendidos, regras de atendimento e horários de funcionamento em um ambiente
                    seguro.
                  </p>
                  <div className="pt-2 space-y-2.5">
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">tune</span>
                      <span>Parametrização ágil de grades de médicos e intervalos de consulta</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified_user</span>
                      <span>Permissões individualizadas para recepção, equipe médica e gestores</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: Uma Experiência para a Equipe da Clínica */}
      <section className="py-24 bg-white border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-caption font-caption tracking-wider uppercase font-bold text-primary">
              Visão de Pessoas
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text mt-2 mb-4 tracking-tight">
              Tecnologia que considera quem faz a clínica funcionar.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Cada perfil possui responsabilidades distintas no atendimento à mulher. Desenvolvemos fluxos que respeitam
              a autonomia e a rotina de cada colaborador.
            </p>
          </div>

          {/* 3 Perspectives Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Perfil 1: Gestão da Clínica */}
            <div className="p-8 rounded-xl bg-surface-canvas border border-border-subtle hover:border-[#008080]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] text-[#006565] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[24px]">analytics</span>
                </div>
                <h3 className="text-title-md font-title-md text-graphite-text mb-3">Gestão da clínica</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Mais clareza na organização da rotina e dos processos administrativos, permitindo tomada de decisões com
                  base em dados de ocupação e conformidade.
                </p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-border-subtle pt-4 text-body-sm font-body-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008080]" />
                  <span>Visão holística de ocupação de salas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008080]" />
                  <span>Controle de prazos de retorno e faturamento</span>
                </li>
              </ul>
            </div>

            {/* Perfil 2: Recepção */}
            <div className="p-8 rounded-xl bg-surface-canvas border border-border-subtle hover:border-[#b8186c]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-pink-50 text-[#b8186c] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[24px]">desk</span>
                </div>
                <h3 className="text-title-md font-title-md text-graphite-text mb-3">Recepção e equipe administrativa</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Uma experiência voltada à organização de agendamentos, cadastros e etapas do atendimento, reduzindo o
                  tempo de espera e retrabalho no balcão.
                </p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-border-subtle pt-4 text-body-sm font-body-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8186c]" />
                  <span>Cadastros rápidos e fila em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8186c]" />
                  <span>Aviso visual de bloqueios e faltas</span>
                </li>
              </ul>
            </div>

            {/* Perfil 3: Profissionais de Saúde */}
            <div className="p-8 rounded-xl bg-surface-canvas border border-border-subtle hover:border-[#7c2d8c]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-[#7c2d8c] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[24px]">stethoscope</span>
                </div>
                <h3 className="text-title-md font-title-md text-graphite-text mb-3">Profissionais de saúde</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Apoio à organização do fluxo da clínica, respeitando os limites e os recursos efetivamente disponíveis
                  no produto, com prontuário focado no atendimento gineco-obstétrico.
                </p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-border-subtle pt-4 text-body-sm font-body-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c2d8c]" />
                  <span>Ficha obstétrica estruturada sem burocracia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c2d8c]" />
                  <span>Emissão de receitas, atestados e laudos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: Construída com Atenção à Experiência e à Privacidade */}
      <section className="py-24 bg-surface-subtle border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Intro Section */}
          <div className="max-w-3xl mb-16">
            <span className="text-caption font-caption tracking-wider uppercase font-bold text-primary">
              Compromisso Institucional
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text mt-2 mb-4 tracking-tight">
              Uma solução pensada para uma rotina que exige cuidado.
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Em um ambiente que envolve informações pessoais, a experiência de uso e a proteção dos dados precisam ser
              consideradas desde o desenvolvimento.
            </p>
          </div>

          {/* 3 Structural Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Usabilidade */}
            <div className="bg-surface-card p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#006565] mb-6">
                  <span className="material-symbols-outlined text-[28px]">touch_app</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-graphite-text mb-3">Usabilidade</h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Interfaces claras e navegação intuitiva concebida para reduzir atrito na rotina médica. Telas limpas,
                  sem excesso de cliques e adaptadas ao ritmo ágil do consultório.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-caption font-caption font-semibold text-primary uppercase tracking-wider">
                <span>Design centrado no usuário</span>
              </div>
            </div>

            {/* Privacidade */}
            <div className="bg-surface-card p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#b8186c] mb-6">
                  <span className="material-symbols-outlined text-[28px]">policy</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-graphite-text mb-3">Privacidade</h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Atenção ao tratamento responsável e confidencialidade das informações em saúde. Total observância às
                  diretrizes da Lei Geral de Proteção de Dados (LGPD).
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-caption font-caption font-semibold text-[#b8186c] uppercase tracking-wider">
                <span>Conformidade ética e legal</span>
              </div>
            </div>

            {/* Segurança */}
            <div className="bg-surface-card p-8 rounded-xl border border-border-subtle shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7c2d8c] mb-6">
                  <span className="material-symbols-outlined text-[28px]">security</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-graphite-text mb-3">Segurança</h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  Consideração de controles de acesso por perfil e proteção de dados na arquitetura da solução, garantindo
                  que apenas profissionais credenciados acessem registros sensíveis.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-caption font-caption font-semibold text-[#7c2d8c] uppercase tracking-wider">
                <span>Arquitetura de alta resiliência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: Encerramento e Diálogo Institucional */}
      <section className="py-24 bg-white border-t border-border-subtle relative overflow-hidden" id="contato">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Call to Action Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full brand-tag-bg border border-[#e11d74]/20 text-[#a3155b]">
                <span className="text-caption font-caption tracking-wider uppercase font-bold">Fale Conosco</span>
              </div>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text tracking-tight">
                Conheça uma nova perspectiva para a gestão da sua clínica.
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                A Cana Med Mulher está sendo desenvolvida para aproximar tecnologia e realidade operacional, com foco nas
                necessidades de clínicas ginecológicas e obstétricas.
              </p>
              <div className="space-y-4 pt-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-body-md font-body-md text-graphite-text hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E6FFFA] text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </div>
                  <div>
                    <span className="text-caption font-caption text-text-muted block">Telefone / WhatsApp</span>
                    <span className="font-semibold">{CONTACT_INFO.phoneFormatted}</span>
                  </div>
                </a>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-body-md font-body-md text-graphite-text hover:text-primary transition-colors"
                  aria-label="Instagram @canamedsolutions"
                >
                  <div className="w-8 h-8 rounded-full bg-pink-50 text-[#b8186c] flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-caption font-caption text-text-muted block">Instagram Oficial</span>
                    <span className="font-semibold">{CONTACT_INFO.instagramHandle}</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-body-md font-body-md text-graphite-text">
                  <div className="w-8 h-8 rounded-full bg-[#E6FFFA] text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div>
                    <span className="text-caption font-caption text-text-muted block">E-mail Institucional</span>
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-body-md font-body-md text-graphite-text">
                  <div className="w-8 h-8 rounded-full bg-pink-50 text-[#b8186c] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <span>Eficiência para quem mais precisa.</span>
                </div>
              </div>
            </div>

            {/* Right: Contact / Demo Request Form */}
            <div className="lg:col-span-6">
              <div className="bg-surface-card rounded-2xl border border-border-subtle p-8 md:p-10 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-headline-sm font-headline-sm text-graphite-text">Entre em contato</h3>
                  <p className="text-body-sm font-body-sm text-text-muted mt-1">
                    Preencha os dados abaixo para conversar sobre a proposta e agendar uma apresentação detalhada.
                  </p>
                </div>
                <form id="mulher-contact-form" className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-label-sm font-label-sm text-graphite-text mb-1.5" htmlFor="name">
                      Nome completo
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-lg border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-graphite-text outline-none transition"
                      id="name"
                      name="name"
                      placeholder="Ex.: Dra. Mariana Castro"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-label-sm text-graphite-text mb-1.5" htmlFor="email">
                        E-mail corporativo
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-graphite-text outline-none transition"
                        id="email"
                        name="email"
                        placeholder="mariana@clinica.com.br"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-label-sm font-label-sm text-graphite-text mb-1.5" htmlFor="phone">
                        Telefone / WhatsApp
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-graphite-text outline-none transition"
                        id="phone"
                        name="phone"
                        placeholder="(81) 99999-9999"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-graphite-text mb-1.5" htmlFor="clinic">
                      Nome da Clínica / Especialidade
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-lg border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-graphite-text outline-none transition"
                      id="clinic"
                      name="clinic"
                      placeholder="Ex.: Clínica da Mulher Santa Clara • Ginecologia"
                      type="text"
                      value={formData.clinic}
                      onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-graphite-text mb-1.5" htmlFor="notes">
                      Como podemos apoiar sua rotina?
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md font-body-md text-graphite-text outline-none transition"
                      id="notes"
                      name="notes"
                      placeholder="Conte brevemente sobre o fluxo atual e principais desafios da clínica..."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      className="w-full sm:w-auto flex-1 brand-button-gradient text-on-primary text-label-md font-label-md px-6 py-3 rounded-lg shadow-sm active:scale-[0.98] transition-all cursor-pointer"
                      type="submit"
                    >
                      Quero conhecer a solução
                    </button>
                    <a
                      className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border border-border-subtle hover:bg-surface-subtle text-graphite-text text-label-md font-label-md transition-all"
                      href="mailto:contato@canamed.com.br"
                    >
                      Fale com nossa equipe
                    </a>
                  </div>
                  {isSubmitted && (
                    <div
                      className="p-4 rounded-lg bg-mint-subtle border border-primary-container/30 text-secondary text-body-sm font-body-sm flex items-center gap-3 mt-4"
                      role="status"
                    >
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span>Obrigado pelo interesse! Nossa equipe entrará em contato em breve.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
