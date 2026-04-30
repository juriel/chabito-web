import { html, LitElement } from 'lit';

export class InstructionsPage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="relative overflow-hidden bg-white">
        <main class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <chabi-instructions></chabi-instructions>
        </main>
      </div>
    `;
  }
}

customElements.define('instructions-page', InstructionsPage);
