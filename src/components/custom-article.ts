import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('custom-article')
class CustomArticle extends LitElement {
  render() {
    return html`
      <article>article</article>
    `;
  }
}
