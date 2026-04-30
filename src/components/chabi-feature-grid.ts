import { html, LitElement } from 'lit';

export class ChabiFeatureGrid extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-[1.75rem] border border-tertiary/30 bg-white p-8 shadow-sm transition hover:shadow-xl">
          <span class="text-lg font-semibold text-primary">IA Agéntica</span>
          <p class="mt-4 text-sm leading-7 text-slate-600">
            Ejecuta tareas complejas por ti, coordina eventos y responde con contexto humano en cada conversación.
          </p>
        </article>
        <article class="rounded-[1.75rem] border border-tertiary/30 bg-white p-8 shadow-sm transition hover:shadow-xl">
          <span class="text-lg font-semibold text-primary">Multidispositivo</span>
          <p class="mt-4 text-sm leading-7 text-slate-600">
            Conecta tu Chabito mediante QR y trabaja desde múltiples dispositivos con la misma experiencia fluida.
          </p>
        </article>
        <article class="rounded-[1.75rem] border border-tertiary/30 bg-white p-8 shadow-sm transition hover:shadow-xl">
          <span class="text-lg font-semibold text-primary">Privacidad</span>
          <p class="mt-4 text-sm leading-7 text-slate-600">
            Tus datos son tuyos. Operamos con servidores propios y controles diseñados para proteger tu información.
          </p>
        </article>
        <article class="rounded-[1.75rem] border border-tertiary/30 bg-white p-8 shadow-sm transition hover:shadow-xl">
          <span class="text-lg font-semibold text-primary">Gratis por siempre</span>
          <p class="mt-4 text-sm leading-7 text-slate-600">
            Chabi es open source y libre para usar. Construye tu Chabito sin suscripciones ocultas.
          </p>
        </article>
      </section>
    `;
  }
}

customElements.define('chabi-feature-grid', ChabiFeatureGrid);
