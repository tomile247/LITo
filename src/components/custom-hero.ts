import { css, LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement('custom-hero')
export class CustomHero extends LitElement {
    static styles = css `
        :host {
            color: blue;
        }

        :host([active]) {
            border: 1px solid red;
        };
    `;

    @state()
    private _counter = 0;

    @property({
        type: Boolean, 
        reflect: true
    })
    
    active: boolean = false;

    render() {
        return html `
            <span>Active: ${this.active}</span>
            <button @click="${() => this.active = !this.active}"></button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "custom-hero": CustomHero;
    }
}
