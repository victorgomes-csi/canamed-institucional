import { useState, type JSX } from 'react';
import { Link } from 'react-router-dom';

export function FrentesSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(index);
    }
  };

  return (
    <section className="py-24 bg-surface-card border-b border-border-subtle" id="frentes">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14">
          <span className="text-caption font-caption uppercase tracking-wider text-secondary font-bold">
            Frentes de Atuação
          </span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-graphite-text mt-2 mb-4">
            Uma gestão integrada começa por diferentes frentes.
          </h2>
          <p className="text-body-lg font-body-lg text-text-muted leading-relaxed">
            A rotina de uma clínica reúne processos que precisam funcionar em conjunto. A Cana Med direciona o desenvolvimento de sua aplicação para conectar essas etapas em uma experiência mais organizada e intuitiva.
          </p>
        </div>

        {/* Painel Interativo com Abas Verticais e Visual Dinâmico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna Esquerda: Lista de Seleção de Abas */}
          <div aria-label="Frentes de Atuação Cana Med" className="lg:col-span-5 flex flex-col gap-3.5" role="tablist">
            {/* Tab Button 01 */}
            <button
              type="button"
              role="tab"
              id="tab-frente-1"
              aria-controls="panel-frente-1"
              aria-selected={activeTab === 1}
              onClick={() => setActiveTab(1)}
              onKeyDown={(e) => handleKeyDown(e, 1)}
              className={`frente-tab text-left p-5 rounded-xl border transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary ${
                activeTab === 1
                  ? 'border-primary/40 bg-mint-subtle/50 text-graphite-text shadow-xs'
                  : 'border-border-subtle bg-surface-canvas text-graphite-text hover:border-primary/40 hover:bg-surface-subtle/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div
                    className={`tab-icon-box w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === 1
                        ? 'bg-primary-container text-on-primary'
                        : 'bg-surface-card border border-border-subtle text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-title-md">badge</span>
                  </div>
                  <span
                    className={`text-caption font-caption font-bold uppercase tracking-wider ${
                      activeTab === 1 ? 'text-primary' : 'text-text-muted'
                    }`}
                  >
                    Frente 01
                  </span>
                </div>
                <span
                  className={`material-symbols-outlined text-title-md tab-indicator transition-opacity ${
                    activeTab === 1 ? 'text-primary' : 'text-text-muted opacity-0 group-hover:opacity-100'
                  }`}
                >
                  arrow_forward
                </span>
              </div>
              <h3 className="text-title-md font-title-md text-graphite-text pl-12">Recepção e cadastro</h3>
              <p className="text-body-sm font-body-sm text-text-muted pl-12 mt-1">
                Primeiro contato organizado, acolhimento e dados operacionais.
              </p>
            </button>

            {/* Tab Button 02 */}
            <button
              type="button"
              role="tab"
              id="tab-frente-2"
              aria-controls="panel-frente-2"
              aria-selected={activeTab === 2}
              onClick={() => setActiveTab(2)}
              onKeyDown={(e) => handleKeyDown(e, 2)}
              className={`frente-tab text-left p-5 rounded-xl border transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary ${
                activeTab === 2
                  ? 'border-secondary/40 bg-mint-subtle/50 text-graphite-text shadow-xs'
                  : 'border-border-subtle bg-surface-canvas text-graphite-text hover:border-primary/40 hover:bg-surface-subtle/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div
                    className={`tab-icon-box w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === 2
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-surface-card border border-border-subtle text-secondary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-title-md">calendar_month</span>
                  </div>
                  <span
                    className={`text-caption font-caption font-bold uppercase tracking-wider ${
                      activeTab === 2 ? 'text-secondary' : 'text-text-muted'
                    }`}
                  >
                    Frente 02
                  </span>
                </div>
                <span
                  className={`material-symbols-outlined text-title-md tab-indicator transition-opacity ${
                    activeTab === 2 ? 'text-secondary' : 'text-text-muted opacity-0 group-hover:opacity-100'
                  }`}
                >
                  arrow_forward
                </span>
              </div>
              <h3 className="text-title-md font-title-md text-graphite-text pl-12">Agendamento e agenda</h3>
              <p className="text-body-sm font-body-sm text-text-muted pl-12 mt-1">
                Sintonia entre horários disponíveis e necessidades reais.
              </p>
            </button>

            {/* Tab Button 03 */}
            <button
              type="button"
              role="tab"
              id="tab-frente-3"
              aria-controls="panel-frente-3"
              aria-selected={activeTab === 3}
              onClick={() => setActiveTab(3)}
              onKeyDown={(e) => handleKeyDown(e, 3)}
              className={`frente-tab text-left p-5 rounded-xl border transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary ${
                activeTab === 3
                  ? 'border-tertiary/40 bg-mint-subtle/50 text-graphite-text shadow-xs'
                  : 'border-border-subtle bg-surface-canvas text-graphite-text hover:border-primary/40 hover:bg-surface-subtle/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div
                    className={`tab-icon-box w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === 3
                        ? 'bg-tertiary text-on-tertiary'
                        : 'bg-surface-card border border-border-subtle text-tertiary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-title-md">linear_scale</span>
                  </div>
                  <span
                    className={`text-caption font-caption font-bold uppercase tracking-wider ${
                      activeTab === 3 ? 'text-tertiary' : 'text-text-muted'
                    }`}
                  >
                    Frente 03
                  </span>
                </div>
                <span
                  className={`material-symbols-outlined text-title-md tab-indicator transition-opacity ${
                    activeTab === 3 ? 'text-tertiary' : 'text-text-muted opacity-0 group-hover:opacity-100'
                  }`}
                >
                  arrow_forward
                </span>
              </div>
              <h3 className="text-title-md font-title-md text-graphite-text pl-12">Fluxo de atendimento</h3>
              <p className="text-body-sm font-body-sm text-text-muted pl-12 mt-1">
                Conexão fluida da chegada à consulta sem gargalos.
              </p>
            </button>

            {/* Tab Button 04 */}
            <button
              type="button"
              role="tab"
              id="tab-frente-4"
              aria-controls="panel-frente-4"
              aria-selected={activeTab === 4}
              onClick={() => setActiveTab(4)}
              onKeyDown={(e) => handleKeyDown(e, 4)}
              className={`frente-tab text-left p-5 rounded-xl border transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary ${
                activeTab === 4
                  ? 'border-primary/40 bg-mint-subtle/50 text-graphite-text shadow-xs'
                  : 'border-border-subtle bg-surface-canvas text-graphite-text hover:border-primary/40 hover:bg-surface-subtle/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div
                    className={`tab-icon-box w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      activeTab === 4
                        ? 'bg-primary-container text-on-primary'
                        : 'bg-surface-card border border-border-subtle text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-title-md">stethoscope</span>
                  </div>
                  <span
                    className={`text-caption font-caption font-bold uppercase tracking-wider ${
                      activeTab === 4 ? 'text-primary' : 'text-text-muted'
                    }`}
                  >
                    Frente 04
                  </span>
                </div>
                <span
                  className={`material-symbols-outlined text-title-md tab-indicator transition-opacity ${
                    activeTab === 4 ? 'text-primary' : 'text-text-muted opacity-0 group-hover:opacity-100'
                  }`}
                >
                  arrow_forward
                </span>
              </div>
              <h3 className="text-title-md font-title-md text-graphite-text pl-12">
                Acompanhamento médico e informações clínicas
              </h3>
              <p className="text-body-sm font-body-sm text-text-muted pl-12 mt-1">
                Informações essenciais com sigilo ético e clareza.
              </p>
            </button>
          </div>

          {/* Coluna Direita: Painel de Detalhes Dinâmico */}
          <div className="lg:col-span-7 bg-surface-canvas rounded-2xl border border-border-subtle p-8 lg:p-10 flex flex-col justify-between shadow-xs min-h-[520px]">
            {/* Painel 1 */}
            {activeTab === 1 && (
              <div
                id="panel-frente-1"
                role="tabpanel"
                aria-labelledby="tab-frente-1"
                className="frente-panel flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-subtle border border-primary/20 text-primary text-caption font-caption font-semibold">
                    <span className="material-symbols-outlined text-body-sm">badge</span>
                    FRENTE 01 • RECEPÇÃO E CADASTRO
                  </div>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    Uma recepção mais organizada desde o primeiro contato.
                  </h3>
                  <p className="text-body-md font-body-md text-text-muted leading-relaxed">
                    A recepção é uma das principais conexões entre a clínica e o paciente. A organização dos cadastros e das informações administrativas ajuda a estruturar essa etapa e a preparar a continuidade do atendimento.
                  </p>
                  {/* Diagrama Visual Limpo */}
                  <div className="p-5 rounded-xl bg-surface-card border border-border-subtle space-y-3">
                    <div className="text-caption font-caption text-secondary font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-body-sm">schema</span>
                      Estrutura de Acolhimento Integrado
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="p-3 rounded-lg bg-surface-subtle border border-border-subtle/80">
                        <div className="text-caption font-caption text-primary font-bold">1. Entrada</div>
                        <div className="text-body-sm font-body-sm text-graphite-text font-medium mt-0.5">Identificação rápida</div>
                        <div className="text-caption font-caption text-text-muted">Sem duplicidade</div>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-subtle border border-border-subtle/80">
                        <div className="text-caption font-caption text-secondary font-bold">2. Cadastro</div>
                        <div className="text-body-sm font-body-sm text-graphite-text font-medium mt-0.5">Dados organizados</div>
                        <div className="text-caption font-caption text-text-muted">Acesso estruturado</div>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-subtle border border-border-subtle/80">
                        <div className="text-caption font-caption text-tertiary font-bold">3. Encaminhamento</div>
                        <div className="text-body-sm font-body-sm text-graphite-text font-medium mt-0.5">Aviso imediato</div>
                        <div className="text-caption font-caption text-text-muted">Fluxo sem ruído</div>
                      </div>
                    </div>
                  </div>
                  {/* Pontos Chave */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Organização das informações cadastrais</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Apoio à rotina da recepção</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Consulta mais clara às informações necessárias</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Continuidade entre o cadastro e as demais etapas da operação</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Painel 2 */}
            {activeTab === 2 && (
              <div
                id="panel-frente-2"
                role="tabpanel"
                aria-labelledby="tab-frente-2"
                className="frente-panel flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-subtle border border-secondary/20 text-secondary text-caption font-caption font-semibold">
                    <span className="material-symbols-outlined text-body-sm">calendar_month</span>
                    FRENTE 02 • AGENDAMENTO E AGENDA
                  </div>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    Mais clareza para organizar a rotina de atendimento.
                  </h3>
                  <p className="text-body-md font-body-md text-text-muted leading-relaxed">
                    O agendamento conecta a disponibilidade dos profissionais às necessidades dos pacientes. Uma experiência bem estruturada ajuda a tornar a visualização e a organização da agenda mais claras para a equipe.
                  </p>
                  {/* Diagrama Visual Limpo Agenda */}
                  <div className="p-5 rounded-xl bg-surface-card border border-border-subtle space-y-3">
                    <div className="text-caption font-caption text-secondary font-bold uppercase tracking-wider flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-body-sm">view_agenda</span>
                        Visão da Grade Diária
                      </span>
                      <span className="text-caption font-caption text-text-muted">Turnos Sincronizados</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-lg bg-surface-subtle border border-border-subtle/80 flex items-center justify-between">
                        <div>
                          <div className="text-caption font-caption text-secondary font-bold">Turno Matutino</div>
                          <div className="text-body-sm font-body-sm text-graphite-text font-medium">08h00 — 12h00</div>
                          <div className="text-caption font-caption text-text-muted mt-0.5">Horários equilibrados</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-caption font-caption bg-surface-card border border-border-subtle text-secondary font-semibold">
                          Fluido
                        </span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-surface-subtle border border-border-subtle/80 flex items-center justify-between">
                        <div>
                          <div className="text-caption font-caption text-primary font-bold">Turno Vespertino</div>
                          <div className="text-body-sm font-body-sm text-graphite-text font-medium">13h30 — 18h00</div>
                          <div className="text-caption font-caption text-text-muted mt-0.5">Intervalos protegidos</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-caption font-caption bg-surface-card border border-border-subtle text-primary font-semibold">
                          Organizado
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Pontos Chave */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-secondary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Visualização organizada dos horários</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-secondary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Gestão de agendamentos e alterações</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-secondary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Clareza sobre a programação diária</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-secondary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Continuidade entre a agenda e o fluxo de atendimento</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Painel 3 */}
            {activeTab === 3 && (
              <div
                id="panel-frente-3"
                role="tabpanel"
                aria-labelledby="tab-frente-3"
                className="frente-panel flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-subtle border border-tertiary/20 text-tertiary text-caption font-caption font-semibold">
                    <span className="material-symbols-outlined text-body-sm">linear_scale</span>
                    FRENTE 03 • FLUXO DE ATENDIMENTO
                  </div>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    Cada etapa conectada à próxima.
                  </h3>
                  <p className="text-body-md font-body-md text-text-muted leading-relaxed">
                    Da chegada do paciente ao andamento do atendimento, a operação depende de informações claras e processos bem coordenados. A Cana Med busca integrar esses momentos em uma experiência mais consistente para a equipe.
                  </p>
                  {/* Diagrama Visual Limpo Fluxo Sequencial */}
                  <div className="p-5 rounded-xl bg-surface-card border border-border-subtle space-y-3">
                    <div className="text-caption font-caption text-secondary font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-body-sm">timeline</span>
                      Sequência sem Fricção
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="flex-1 p-3 rounded-lg bg-surface-subtle border border-border-subtle text-center">
                        <span className="material-symbols-outlined text-primary text-headline-sm">check_box</span>
                        <div className="text-caption font-caption font-bold text-graphite-text mt-1">Recepção</div>
                        <div className="text-[10px] text-text-muted">Acolhimento</div>
                      </div>
                      <span className="material-symbols-outlined text-border-muted text-body-md">arrow_forward</span>
                      <div className="flex-1 p-3 rounded-lg bg-surface-subtle border border-border-subtle text-center">
                        <span className="material-symbols-outlined text-secondary text-headline-sm">hourglass_empty</span>
                        <div className="text-caption font-caption font-bold text-graphite-text mt-1">Espera</div>
                        <div className="text-[10px] text-text-muted">Tempo visível</div>
                      </div>
                      <span className="material-symbols-outlined text-border-muted text-body-md">arrow_forward</span>
                      <div className="flex-1 p-3 rounded-lg bg-surface-subtle border border-border-subtle text-center">
                        <span className="material-symbols-outlined text-tertiary text-headline-sm">meeting_room</span>
                        <div className="text-caption font-caption font-bold text-graphite-text mt-1">Atendimento</div>
                        <div className="text-[10px] text-text-muted">Consultório</div>
                      </div>
                    </div>
                  </div>
                  {/* Pontos Chave */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-tertiary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Organização da chegada dos pacientes</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-tertiary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Acompanhamento das etapas do atendimento</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-tertiary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Clareza sobre o andamento da rotina</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-tertiary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Melhor continuidade entre recepção e profissionais</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Painel 4 */}
            {activeTab === 4 && (
              <div
                id="panel-frente-4"
                role="tabpanel"
                aria-labelledby="tab-frente-4"
                className="frente-panel flex flex-col justify-between h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-subtle border border-primary/20 text-primary text-caption font-caption font-semibold">
                    <span className="material-symbols-outlined text-body-sm">stethoscope</span>
                    FRENTE 04 • CONTEXTO CLÍNICO &amp; INFORMAÇÕES
                  </div>
                  <h3 className="text-headline-md font-headline-md text-graphite-text">
                    Informações organizadas para apoiar o trabalho médico.
                  </h3>
                  <p className="text-body-md font-body-md text-text-muted leading-relaxed">
                    O atendimento médico exige uma experiência adequada ao contexto clínico, com informações pertinentes organizadas e acesso compatível com as responsabilidades de cada profissional.
                  </p>
                  {/* Diagrama Visual Limpo Contexto Clínico */}
                  <div className="p-5 rounded-xl bg-surface-card border border-border-subtle space-y-3">
                    <div className="text-caption font-caption text-secondary font-bold uppercase tracking-wider flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-body-sm">lock_person</span>
                        Contexto de Consulta &amp; Sigilo
                      </span>
                      <span className="text-caption font-caption text-primary font-semibold">Controle Estrito</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-surface-subtle border border-border-subtle flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">clinical_notes</span>
                        <div>
                          <div className="text-body-sm font-body-sm text-graphite-text font-medium">Prontuário &amp; Registro Clínico</div>
                          <div className="text-caption font-caption text-text-muted">Acesso restrito apenas ao profissional responsável</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-primary text-title-md">shield</span>
                    </div>
                  </div>
                  {/* Pontos Chave */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Organização das informações pertinentes ao atendimento</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Continuidade dos registros conforme os recursos disponibilizados pela aplicação</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Acesso controlado às informações</span>
                    </div>
                    <div className="flex items-start gap-3 text-body-sm font-body-sm text-graphite-text">
                      <span className="material-symbols-outlined text-primary text-body-md shrink-0 mt-0.5">check_circle</span>
                      <span>Experiência de utilização pensada para o profissional de saúde</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA da Seção Frentes */}
        <div className="mt-14 p-8 rounded-2xl bg-surface-canvas border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-headline-sm font-headline-sm text-graphite-text">
              Conheça a visão da Cana Med para uma gestão mais integrada.
            </h4>
            <p className="text-body-sm font-body-sm text-text-muted">
              Processos pensados com rigor para descomplicar a jornada de clínicas e serviços de saúde.
            </p>
          </div>
          <Link
            to="/sobre-nos"
            className="shrink-0 inline-flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-150 active:scale-[0.98] shadow-sm"
          >
            Conheça nosso método
            <span className="material-symbols-outlined ml-2 text-headline-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
