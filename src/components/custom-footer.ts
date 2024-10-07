import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('custom-footer')
class CustomFooter extends LitElement {
  render() {
    return html`
      <footer>footer</footer>
    `;
  }
}
