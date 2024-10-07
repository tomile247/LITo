import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";


import './custom-header';
import './custom-hero';
import './custom-article';
import './custom-footer';

@customElement('home-page')
class HomePage extends LitElement {
    render () {
        return html `
            <custom-header></custom-header>
            <custom-hero name="Wohoo"></custom-hero>
            <custom-article></custom-article>
            <custom-footer></custom-footer>
        `
    }
}