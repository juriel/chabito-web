import { html, LitElement } from 'lit';

export class ChabiHero extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="hero" class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div class="max-w-2xl">
          <p class="mb-4 inline-flex rounded-full bg-tertiary/20 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Asistente Agéntico
          </p>
          <h1 class="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
            Tu Asistente Agéntico en WhatsApp, en un QR.
          </h1>
          <p class="mt-6 max-w-xl text-xl leading-9 text-slate-600">
            No es solo un bot. Es un Chabito. Tu nuevo asistente personal que agenda, busca y resuelve tareas por ti.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#instalacion"
              class="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary"
            >
              ¡Crea tu primer Chabito ahora!
            </a>
            <a href="#open-source" class="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-primary hover:text-primary">
              Ver código abierto
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_40px_120px_rgba(39,32,123,0.08)]">
          <div class="absolute -left-8 top-8 hidden h-20 w-20 rounded-full bg-secondary/10 blur-2xl md:block"></div>
          <div class="grid gap-8 rounded-[1.75rem] bg-slate-50 p-6 shadow-sm">
            <div class="flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm">
              <div>
                <p class="text-sm uppercase tracking-[0.2em] text-slate-500">WhatsApp</p>
                <p class="mt-2 text-lg font-semibold text-slate-900">Chabito activo</p>
              </div>
              <div class="rounded-2xl bg-box-bg px-4 py-2 text-sm text-slate-700">
                En línea
              </div>
            </div>

            <div class="grid gap-4 rounded-[1.5rem] bg-white p-5 shadow-inner">
              <div class="rounded-[1.5rem] border border-slate-200 bg-[#F5FAFC] p-4">
                <div class="mb-4 flex items-center justify-between text-sm text-slate-500">
                  <span>Chabito</span>
                  <span>09:27</span>
                </div>
                <p class="text-sm leading-6 text-slate-700">
                  Hola, soy tu Chabito. Puedo reservar mesas, enviar seguimientos y ayudarte a cerrar ventas desde WhatsApp.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div class="rounded-3xl bg-primary/5 p-4 text-sm text-primary">Agenda automática</div>
                <div class="rounded-3xl bg-secondary/10 p-4 text-sm text-secondary">Respuestas inteligentes</div>
              </div>
            </div>

            <div class="flex items-center justify-between rounded-3xl bg-box-bg px-4 py-3 text-sm text-slate-700">
              <span>Escanea el QR para conectar WhatsApp</span>
              <span class="rounded-full bg-secondary px-3 py-1 text-white">Listo</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('chabi-hero', ChabiHero);
