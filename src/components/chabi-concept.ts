import { html, LitElement } from 'lit';

export class ChabiConcept extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="concepto" class="rounded-[2rem] bg-box-bg px-6 py-12 sm:px-12 lg:px-16">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Descubre a tu asistente</p>
          <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">¿Qué es un Chabito?</h2>
          <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Un Chabito es un agente autónomo que vive en WhatsApp y no solo responde, sino que actúa en tu lugar para resolver tareas reales.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div class="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <p class="text-2xl font-semibold text-primary">Agéntico</p>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Toma decisiones basadas en tus necesidades y sigue instrucciones con autonomía.
            </p>
          </div>
          <div class="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <p class="text-2xl font-semibold text-primary">Personal</p>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Aprende de tus preferencias para adaptar cada conversación y tarea a tu estilo.
            </p>
          </div>
          <div class="rounded-[1.75rem] bg-white p-8 shadow-sm">
            <p class="text-2xl font-semibold text-primary">Ubicuos</p>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Vive en tu WhatsApp, disponible 24/7 y listo para apoyar ventas, soporte y agenda.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('chabi-concept', ChabiConcept);
