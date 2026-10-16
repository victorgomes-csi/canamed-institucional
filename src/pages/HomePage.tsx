import { useState, type JSX } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_ASSETS } from '../constants/assets';
import { FrentesSection } from '../components/home/FrentesSection';

export function HomePage(): JSX.Element {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    clinica: '',
    porte: '1',
    mensagem: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      nome: '',
      email: '',
      clinica: '',
      porte: '1',
      mensagem: '',
    });
  };

  return (
    <main id="main-content">
      {/* ========================================== */}
      {/* 2. HERO SECTION — EDITORIAL DE ALTO IMPACTO */}
      {/* ========================================== */}
      <section
        className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-surface via-surface-canvas to-surface-canvas border-b border-border-subtle"
        id="inicio"
      >
        {/* Tonal Grid Texture Background (Discreet) */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Coluna Esquerda: Texto Editorial e Proposta de Valor */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge / Tag Institucional */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-subtle border border-border-subtle text-secondary text-caption font-caption tracking-wider">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim inline-block animate-pulse" />
                GESTÃO • ORGANIZAÇÃO • SAÚDE
              </div>
              {/* Título Principal H1 */}
              <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-graphite-text tracking-tight max-w-2xl">
                Mais eficiência para quem dedica a vida a cuidar.
              </h1>
              {/* Subtítulo Curto */}
              <p className="text-body-lg font-body-lg text-text-muted max-w-xl leading-relaxed">
                A Cana Med existe para tornar a rotina de clínicas e serviços de saúde mais organizada, eficiente e humana, conectando processos estruturados ao cuidado com as pessoas.
              </p>
              {/* Ações Primárias & Secundárias */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-lg hover:bg-secondary transition-all duration-150 active:scale-[0.98] shadow-sm"
                  to="/sobre-nos"
                >
                  Conheça a Cana Med
                  <span className="material-symbols-outlined ml-2 text-headline-sm">arrow_forward</span>
                </Link>
                <a
                  className="inline-flex items-center justify-center bg-transparent border-2 border-primary-container text-primary font-label-md text-label-md px-6 py-3.5 rounded-lg hover:bg-mint-subtle transition-all duration-150 active:scale-[0.98]"
                  href="#frentes"
                >
                  Conheça nossas soluções
                </a>
              </div>
              {/* Selo de Rigor Institucional */}
              <div className="pt-6 border-t border-border-subtle flex items-center gap-4 text-caption font-caption text-text-muted">
                <div className="flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-primary text-body-md"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span>Metodologia Orientada à Prática Clínica</span>
                </div>
                <span className="text-border-muted">•</span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-primary text-body-md"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    security
                  </span>
                  <span>Conformidade &amp; Ética em Saúde</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Composição Arquitetural Editorial */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Cartão Principal Bento com Elevação Tonal e Borda de Destaque */}
                <div className="bg-surface-card rounded-xl border border-border-subtle shadow-sm p-6 relative z-20 space-y-5">
                  {/* Topo do Card com Monograma Oficial */}
                  <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Monograma Cana Med"
                        className="w-10 h-10 object-contain"
                        src={BRAND_ASSETS.canamedMonogram}
                      />
                      <div>
                        <div className="text-title-md font-title-md text-graphite-text">Fluxo Operacional Integrado</div>
                        <div className="text-caption font-caption text-text-muted">Equilíbrio &amp; Previsibilidade</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-caption font-caption bg-mint-subtle text-secondary border border-secondary/20">
                      Ativo
                    </span>
                  </div>
                  {/* Simulação de Linha de Processo sem Ruído */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-label-sm font-label-sm font-bold">
                          1
                        </div>
                        <span className="text-body-sm font-body-sm font-medium text-graphite-text">Acolhimento &amp; Triagem Ágil</span>
                      </div>
                      <span className="text-caption font-caption text-primary font-semibold">100% Fluido</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-label-sm font-label-sm font-bold">
                          2
                        </div>
                        <span className="text-body-sm font-body-sm font-medium text-graphite-text">Sincronia de Consultório &amp; Agenda</span>
                      </div>
                      <span className="text-caption font-caption text-secondary font-semibold">Pontual</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-subtle border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-label-sm font-label-sm font-bold">
                          3
                        </div>
                        <span className="text-body-sm font-body-sm font-medium text-graphite-text">Pós-Consulta &amp; Continuidade</span>
                      </div>
                      <span className="text-caption font-caption text-tertiary font-semibold">Estruturado</span>
                    </div>
                  </div>
                  {/* Barra de Status Discreta */}
                  <div className="pt-2 flex items-center justify-between text-label-sm font-label-sm text-text-muted">
                    <span>Tempo Clínico Protegido:</span>
                    <span className="text-primary font-bold">+40% foco assistencial</span>
                  </div>
                </div>
                {/* Cartão Flutuante Secundário Inferior */}
                <div className="mt-4 bg-surface-subtle/80 backdrop-blur-sm rounded-xl border border-border-subtle p-4 flex items-center justify-between shadow-sm relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-headline-sm">tune</span>
                    <div>
                      <div className="text-label-md font-label-md text-graphite-text">Adaptação sem atrito</div>
                      <div className="text-body-sm font-body-sm text-text-muted">Respeitando o ritmo da sua equipe</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. O CENÁRIO REAL DA GESTÃO EM SAÚDE      */}
      {/* ========================================== */}
      <section className="py-20 bg-surface-card border-b border-border-subtle" id="cenario">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-caption font-caption uppercase tracking-wider text-secondary font-bold">
              O CENÁRIO QUE QUEREMOS TRANSFORMAR
            </span>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text mt-2 mb-4">
              Clínicas não deveriam perder tempo precioso com processos manuais e dispersos.
            </h2>
            <p className="text-body-lg font-body-lg text-text-muted leading-relaxed">
              Quando cadastros, confirmações de agenda e comunicação operam de forma isolada, a equipe gasta energia resolvendo gargalos em vez de focar no paciente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Ponto 1 */}
            <div className="p-6 rounded-xl bg-surface-canvas border border-border-subtle hover:border-primary/40 transition-all flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-mint-subtle text-primary flex items-center justify-center font-bold text-label-md">01</span>
                <span className="material-symbols-outlined text-primary text-headline-sm">support_agent</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-graphite-text mb-2">Sobrecarga de canais e recepção</h3>
                <p className="text-body-sm font-body-sm text-text-muted leading-relaxed">
                  Mensagens simultâneas e ligações concorrem diretamente com o acolhimento presencial na recepção.
                </p>
              </div>
            </div>
            {/* Ponto 2 */}
            <div className="p-6 rounded-xl bg-surface-canvas border border-border-subtle hover:border-primary/40 transition-all flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-mint-subtle text-secondary flex items-center justify-center font-bold text-label-md">02</span>
                <span className="material-symbols-outlined text-secondary text-headline-sm">sync_problem</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-graphite-text mb-2">Informações dispersas e retrabalho</h3>
                <p className="text-body-sm font-body-sm text-text-muted leading-relaxed">
                  Planilhas desconectadas e anotações manuais exigem repetição de cadastros e conferências desgastantes.
                </p>
              </div>
            </div>
            {/* Ponto 3 */}
            <div className="p-6 rounded-xl bg-surface-canvas border border-border-subtle hover:border-primary/40 transition-all flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-mint-subtle text-tertiary flex items-center justify-center font-bold text-label-md">03</span>
                <span className="material-symbols-outlined text-tertiary text-headline-sm">meeting_room</span>
              </div>
              <div>
                <h3 className="text-title-md font-title-md text-graphite-text mb-2">Falta de continuidade com o consultório</h3>
                <p className="text-body-sm font-body-sm text-text-muted leading-relaxed">
                  Descompasso entre a recepção e a sala de atendimento reduz a previsibilidade e prejudica a experiência clínica.
                </p>
              </div>
            </div>
          </div>
          {/* Faixa de Ética e Segurança */}
          <div className="p-5 rounded-xl bg-mint-subtle/70 border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-headline-sm shrink-0">shield_with_heart</span>
              <p className="text-body-sm font-body-sm text-text-muted leading-snug">
                <strong className="text-graphite-text font-semibold">Tratamento ético e segurança de dados:</strong> Princípios inegociáveis para resguardar a privacidade e a confiança dos pacientes.
              </p>
            </div>
            <span className="shrink-0 px-3 py-1 rounded-full bg-surface-card border border-border-subtle text-caption font-caption text-secondary font-semibold">
              Conformidade LGPD
            </span>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. FRENTES DE ATUAÇÃO (Painel Interativo)   */}
      {/* ========================================== */}
      <FrentesSection />

      {/* ========================================== */}
      {/* 6. DESTAQUE CANA MED MULHER                */}
      {/* ========================================== */}
      <section className="py-20 bg-surface-canvas border-b border-border-subtle relative overflow-hidden" id="cana-med-mulher">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-surface-card rounded-2xl border border-border-subtle p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-subtle border border-border-subtle text-caption font-caption font-semibold text-secondary tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                Solução Especializada
              </div>
              <div className="mb-2">
                <img
                  alt="Cana Med Mulher"
                  className="h-11 md:h-12 w-auto object-contain"
                  src={BRAND_ASSETS.mulherLogoLonga}
                />
              </div>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text tracking-tight">
                Gestão com sensibilidade e acolhimento planejado para a saúde da mulher.
              </h2>
              <p className="text-body-lg font-body-lg text-text-muted leading-relaxed">
                Desenvolvida especificamente para consultórios e clínicas ginecológicas e obstétricas, a Cana Med Mulher alia fluxos clínicos personalizados a uma experiência humanizada em cada etapa do atendimento.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-body-sm font-body-sm text-graphite-text">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-title-md">favorite</span>
                  <span>Acolhimento empático e ágil</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-title-md">calendar_month</span>
                  <span>Agendas personalizadas por protocolo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-title-md">lock</span>
                  <span>Privacidade reforçada para a mulher</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-title-md">flowsheet</span>
                  <span>Continuidade do cuidado obstétrico</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-7 py-3.5 rounded-lg hover:bg-secondary transition-all duration-150 active:scale-[0.98] shadow-sm"
                  to="/cana-med-mulher"
                >
                  Conheça a Cana Med Mulher
                  <span className="material-symbols-outlined ml-2 text-headline-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center p-6 bg-surface-subtle/80 rounded-xl border border-border-subtle">
              <div className="text-center space-y-4">
                <img
                  alt="Monograma Cana Med Mulher"
                  className="h-28 w-auto mx-auto object-contain"
                  src={BRAND_ASSETS.mulherLogoCurta}
                />
                <div className="text-title-md font-title-md text-graphite-text">Cuidado &amp; Rigor Operacional</div>
                <p className="text-caption font-caption text-text-muted max-w-xs mx-auto">
                  A harmonia entre tecnologia moderna e a escuta ativa necessária para a saúde feminina integral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 8. SEÇÃO DE CONTATO & CTA INSTITUCIONAL    */}
      {/* ========================================== */}
      <section className="py-20 bg-surface-canvas border-b border-border-subtle relative" id="contato">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-caption font-caption uppercase tracking-wider text-secondary font-bold">
                DIÁLOGO &amp; CONEXÃO
              </span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text">
                Vamos construir uma gestão mais eficiente para a sua clínica?
              </h2>
              <p className="text-body-lg font-body-lg text-text-muted leading-relaxed">
                Convide nossa equipe para entender os desafios práticos da sua operação e descubra como simplificar sua rotina de ponta a ponta.
              </p>
              <div className="space-y-3 pt-2 text-body-md font-body-md text-graphite-text">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span>contato@canamed.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <span>Atendimento Nacional para Clínicas e Serviços de Saúde</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-mint-subtle border border-border-subtle text-caption font-caption text-secondary">
                <div className="font-bold flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Compromisso Ético &amp; Sigilo LGPD
                </div>
                <p className="leading-relaxed text-text-muted">
                  Dados institucionais tratados com estrito sigilo profissional e utilizados exclusivamente para o contato direto da equipe.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-surface-card rounded-2xl border border-border-subtle p-8 shadow-sm">
                <form className="space-y-5" id="contact-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-label-md font-label-md text-graphite-text" htmlFor="nome">
                        Nome Completo
                      </label>
                      <input
                        className="w-full h-11 px-3.5 rounded-lg border border-border-muted bg-surface-canvas text-graphite-text font-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition"
                        id="nome"
                        name="nome"
                        placeholder="Ex.: Dra. Camila Torres"
                        required
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-label-md font-label-md text-graphite-text" htmlFor="email">
                        E-mail Profissional
                      </label>
                      <input
                        className="w-full h-11 px-3.5 rounded-lg border border-border-muted bg-surface-canvas text-graphite-text font-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition"
                        id="email"
                        name="email"
                        placeholder="camila@clinica.com.br"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-label-md font-label-md text-graphite-text" htmlFor="clinica">
                        Nome da Clínica
                      </label>
                      <input
                        className="w-full h-11 px-3.5 rounded-lg border border-border-muted bg-surface-canvas text-graphite-text font-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition"
                        id="clinica"
                        name="clinica"
                        placeholder="Ex.: Clínica São Lucas"
                        required
                        type="text"
                        value={formData.clinica}
                        onChange={(e) => setFormData({ ...formData, clinica: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-label-md font-label-md text-graphite-text" htmlFor="porte">
                        Porte / Especialistas
                      </label>
                      <select
                        className="w-full h-11 px-3.5 rounded-lg border border-border-muted bg-surface-canvas text-graphite-text font-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition"
                        id="porte"
                        name="porte"
                        value={formData.porte}
                        onChange={(e) => setFormData({ ...formData, porte: e.target.value })}
                      >
                        <option value="1">Consultório Individual (1 a 2 salas)</option>
                        <option value="2-5">Pequeno Porte (3 a 5 profissionais)</option>
                        <option value="6-15">Médio Porte (6 a 15 profissionais)</option>
                        <option value="15+">Centro Médico Expandido (15+)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-label-md font-label-md text-graphite-text" htmlFor="mensagem">
                      Como podemos ajudar?
                    </label>
                    <textarea
                      className="w-full p-3.5 rounded-lg border border-border-muted bg-surface-canvas text-graphite-text font-body-md focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 outline-none transition resize-none"
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte brevemente sua demanda principal..."
                      required
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    />
                  </div>
                  <div>
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-8 py-3.5 rounded-lg hover:bg-secondary transition-all duration-150 active:scale-[0.98] shadow-sm"
                      id="submit-btn"
                      type="submit"
                    >
                      <span>Entre em contato</span>
                      <span className="material-symbols-outlined ml-2 text-headline-sm">send</span>
                    </button>
                  </div>
                  {isSubmitted && (
                    <div
                      className="p-4 rounded-lg bg-mint-subtle border border-primary-container/30 text-secondary text-body-sm font-body-sm flex items-center gap-3"
                      id="form-feedback"
                      role="status"
                    >
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span>Mensagem recebida com sucesso! Em breve entraremos em contato.</span>
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
