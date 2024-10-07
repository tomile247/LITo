import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('custom-header')
class CustomHeader extends LitElement {
  render() {
    return html`
      <header>header</header>
    `;
  }
}
