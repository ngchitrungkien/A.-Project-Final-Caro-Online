import {BaseComponent} from '../BaseComponent.js'

const style = /* html */ `
<style>
    * {
        font-family: 'Titillium Web', sans-serif;
        text-align: center;
    }
    .main-screen {
        border: 0;
        background: url(https://images.squarespace-cdn.com/content/v1/52ec28b3e4b0644432d9fd33/1454538036222-JT0VJJKPI23Q2PQ9WHQM/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/IMG_0034.JPG?format=1500w) no-repeat center;
        background-size: cover;
        width: 100%;
	    min-height:100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15em 0 1em;
    }


</style>
`;

class MainScreen extends BaseComponent {

    render(){
        this._shadowRoot.innerHTML = /* html */ `
        ${style}
        <section class='main-screen'></section>
        `;
    }
}

window.customElements.define('main-screen', MainScreen)