import { html, LitElement } from 'lit';

export class ChabiNav extends LitElement {
  createRenderRoot() {
    return this;
  }

  private get logoUrl(): string {
    return new URL('../../chabi-logo-web.svg', import.meta.url).href;
  }

  render() {
    return html`
      <header class="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" class="flex items-center gap-3">
            <img src="${this.logoUrl}" alt="Chabi logo" class="h-10 w-10 object-contain" />
            <span class="text-xl font-semibold text-primary">Chabi</span>
          </a>
          <nav class="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            <a href="/" class="transition hover:text-primary">Inicio</a>
            <a href="/instrucciones" class="transition hover:text-primary">Tutorial</a>
            <a href="/#open-source" class="transition hover:text-primary">Open Source</a>
          </nav>
          <div class="flex items-center gap-3">
            <a
              href="#hero"
              class="rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
            >
              Crea tu Chabito
            </a>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('chabi-nav', ChabiNav);
