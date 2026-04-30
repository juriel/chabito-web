import { html, LitElement } from 'lit';

export class ChabiQuickstart extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="quickstart" class="space-y-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">3 Pasos simples</p>
          <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Comienza en Minutos</h2>
          <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Tu primer Chabito listo para responder en WhatsApp en solo 3 pasos.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-[1.75rem] bg-box-bg p-8 shadow-sm">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary font-bold text-lg">1</div>
            <h3 class="text-lg font-semibold text-slate-900">Instala Bun</h3>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Descarga e instala Bun, el entorno JavaScript ultrarrápido optimizado para Chabito.
            </p>
          </div>
          <div class="rounded-[1.75rem] bg-box-bg p-8 shadow-sm">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary font-bold text-lg">2</div>
            <h3 class="text-lg font-semibold text-slate-900">Ejecuta el Servidor</h3>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Clona el repositorio, configura tu API Key de IA y ejecuta <code class="bg-slate-100 px-2 py-1 rounded">bun run start:bun</code>.
            </p>
          </div>
          <div class="rounded-[1.75rem] bg-box-bg p-8 shadow-sm">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary font-bold text-lg">3</div>
            <h3 class="text-lg font-semibold text-slate-900">Escanea el QR</h3>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Abre WhatsApp, escanea el QR desde la interfaz y tu Chabito estará funcionando.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a
            href="/instrucciones"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-secondary"
          >
            Ver Guía Técnica Completa
          </a>
        </div>
      </section>
    `;
  }
}

customElements.define('chabi-quickstart', ChabiQuickstart);
