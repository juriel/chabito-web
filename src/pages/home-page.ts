import { html, LitElement } from 'lit';

export class HomePage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="relative overflow-hidden bg-white">
        <main class="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <chabi-hero></chabi-hero>
          <div class="mt-20 space-y-16">
            <chabi-concept></chabi-concept>
            <chabi-quickstart></chabi-quickstart>
            <chabi-feature-grid></chabi-feature-grid>
          </div>
        </main>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
