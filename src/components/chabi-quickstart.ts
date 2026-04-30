import { html, LitElement } from 'lit';

export class ChabiQuickstart extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="instalacion" class="space-y-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Comienza en minutos</p>
          <h2 class="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">Instalación y Inicio Rápido</h2>
          <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Sigue estos pasos para instalar Chabi y desplegar tu primer Chabito desde el repositorio.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <div class="rounded-[1.75rem] bg-box-bg p-8 shadow-sm">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">1</div>
            <h3 class="text-lg font-semibold text-slate-900">Clona el Repo</h3>
            <pre class="mt-4 overflow-x-auto rounded-3xl bg-slate-950/95 p-4 text-xs font-semibold text-white">
git clone https://github.com/chabi-oss/chabi.git
            </pre>
          </div>
          <div class="rounded-[1.75rem] bg-box-bg p-8 shadow-sm">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">2</div>
            <h3 class="text-lg font-semibold text-slate-900">Escanea el QR</h3>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Sincroniza tu WhatsApp en segundos y conecta tu Chabito como un asistente siempre activo.
            </p>
          </div>
          <div class="rounded-[1.75rem] bg-box-bg p-8 shadow-sm">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">3</div>
            <h3 class="text-lg font-semibold text-slate-900">Dale Vida</h3>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              Nombra a tu Chabito y configura una personalidad que conecte con tus clientes.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a
            href="#open-source"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-secondary"
          >
            Ir a la Guía de Instalación
          </a>
        </div>
      </section>
    `;
  }
}

customElements.define('chabi-quickstart', ChabiQuickstart);
