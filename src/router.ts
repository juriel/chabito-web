import { html, LitElement } from 'lit';
import { Router } from '@vaadin/router';
import './pages/home-page';
import './pages/instructions-page';
import './components/chabi-nav';
import './components/chabi-hero';
import './components/chabi-concept';
import './components/chabi-quickstart';
import './components/chabi-instructions';
import './components/chabi-feature-grid';
import './components/chabi-footer';

export class ChabiRouter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="relative overflow-hidden bg-white">
        <chabi-nav></chabi-nav>
        <div id="outlet"></div>
        <chabi-footer></chabi-footer>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet');
    if (!outlet) {
      console.error('Outlet not found');
      return;
    }

    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/instrucciones', component: 'instructions-page' },
      { path: '/inicio', redirect: '/' },
      { path: '(.*)', redirect: '/' },
    ]);
  }
}

customElements.define('chabi-router', ChabiRouter);
