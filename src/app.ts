import { html, LitElement } from 'lit';
import './components/chabi-nav';
import './components/chabi-hero';
import './components/chabi-concept';
import './components/chabi-quickstart';
import './components/chabi-instructions';
import './components/chabi-feature-grid';
import './components/chabi-footer';

export class ChabiPage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="relative overflow-hidden bg-white">
        <chabi-nav></chabi-nav>
        <main class="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <chabi-hero></chabi-hero>
          <div class="mt-20 space-y-16">
            <chabi-concept></chabi-concept>
            <chabi-quickstart></chabi-quickstart>
            <chabi-instructions></chabi-instructions>
            <chabi-feature-grid></chabi-feature-grid>
          </div>
        </main>
        <chabi-footer></chabi-footer>
      </div>
    `;
  }
}

customElements.define('chabi-page', ChabiPage);

const app = document.createElement('chabi-page');
const root = document.querySelector('#app');
if (root) {
  root.appendChild(app);
}
