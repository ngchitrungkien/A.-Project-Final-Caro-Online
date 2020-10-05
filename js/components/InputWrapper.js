import {BaseComponent} from '../BaseComponent.js';

const style = /* html */ `
<style>
    * {
        font-family: 'Titillium Web', sans-serif;
        color: #ffffff
    }
    .input-label {
        text-transform: uppercase;
    }
    .input-main {
        font-size: 20px;
        border: 1px solid #ffffff;
        width: 35%;
        height: 30px;
        border-radius: 6px;
        background: transparent;
        justify-content: center;
    }
    .input-error {
        font-size: 20px;
        color: 	#ffbf00;
    }

    .input-label:focus, .input-main:focus, .input-error:focus {
        background: #607a94;
        color: #001427;
        outline: none;
    }

</style>
`;

class InputWrapper extends BaseComponent {
    constructor() {
        super();

        this.props = {
            label: '',
            type: 'text',
            error: '',
            value: ''
        };
    }

    static get observedAttributes(){
        return ['label','type','error','value']
    }

    render(){
        this._shadowRoot.innerHTML = /* html */ `
        ${style}
        <div class='input-wrapper'>
            <label class='input-label' for="input">${this.props.label}</label>
            <br>
            <input class='input-main' type="${this.props.type}" value='${this.props.value}'>
            <div class='input-error'>${this.props.error}</div>
        </div>
        `;
    }

    get value() {
        return this._shadowRoot.querySelector('.input-main').value;
    }
}

window.customElements.define('input-wrapper', InputWrapper)