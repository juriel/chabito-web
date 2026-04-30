import { html, LitElement } from 'lit';

export class ChabiFooter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer id="open-source" class="bg-primary px-4 py-16 text-white sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl text-center">
          <p class="text-sm uppercase tracking-[0.35em] text-secondary/70">Open Source</p>
          <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Chabi es Open Source. Únete al movimiento.
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            Invita a otros a crear su propio Chabito y transforma tu WhatsApp en un asistente ágil, cercano y confiable.
          </p>
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/juriel/chabito2"
              target="_blank"
              class="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-tertiary"
            >
              Ver repositorio en GitHub https://github.com/juriel/chabito2
            </a>
            <a
              href="#hero"
              class="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Regresa al inicio
            </a>
          </div>
          <div class="mt-12 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <a href="#" class="transition hover:text-white">Twitter</a>
            <a href="#" class="transition hover:text-white">Discord</a>
            <a href="https://github.com/juriel/chabito2" class="transition hover:text-white">GitHub</a>
            <a href="#" class="transition hover:text-white">Documentación</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('chabi-footer', ChabiFooter);
