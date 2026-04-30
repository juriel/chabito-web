import { html, LitElement } from 'lit';
import './router';

export class ChabiApp extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<chabi-router></chabi-router>`;
  }
}

customElements.define('chabi-app', ChabiApp);

const app = document.createElement('chabi-app');
const root = document.querySelector('#app');
if (root) {
  root.appendChild(app);
}
