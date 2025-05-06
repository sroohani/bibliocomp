import { LitElement, html, render } from 'lit';

export class BcButton extends LitElement {
    private _shadowRoot: ShadowRoot;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    render() {
        return render(html`
            <button class="bc-button"></button>
        `, this._shadowRoot);
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
    }
}

window.customElements.define('bc-button', BcButton);