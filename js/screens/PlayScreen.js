import {BaseComponent} from '../BaseComponent.js'

const style = /* html */ `
<style>
    * {
        font-family: 'Titillium Web', sans-serif;
        text-align: center;
    }
    h1 {
        color: #ffffff;
        font-size: 40px;
    }
    img {
        margin-bottom: 50px;
        max-width:200px;
    }

    .logo{
        
        display: block;
    }
    .play-screen {
        border: 0;
        background: url(https://images.squarespace-cdn.com/content/v1/52ec28b3e4b0644432d9fd33/1454538036222-JT0VJJKPI23Q2PQ9WHQM/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/IMG_0034.JPG?format=1500w) no-repeat center;
        background-size: 100%;
        width: 100%;
	    min-height:100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15em 0 1em;
    }

    .btn-play {
        color: #ffffff;
        font-family: Titillium Web, sans-serif;
        font-size: 30px;
        background-color: #1bbc9b;
        width:200px;
        border: 0;
        margin-bottom:15px;
    }
    .btn-play:hover {
        background-color: #169c81;
        cursor: pointer;
    }

</style>
`;

class PlayScreen extends BaseComponent {

    render(){
        this._shadowRoot.innerHTML = /* html */ `
        ${style}
        
        <section class='play-screen'>
            <h1>CARO ZONE</h1>
            <img src="https://lh3.googleusercontent.com/R2NTrDbjejFDmh-ejLbTZyIv5mY6bN3opl1rfVKibNc-AxlCD9h62lE5yrab0p3babg" style="width:30%; height: 30%">
            <form class='form-play'>
                <h1>Let's Go!!!</h1>
                <button class='btn-play' onclick="window.location.href='http://127.0.0.1:5500/index.html#!/main'">Play</button>
                <button onclick="window.location.href='http://127.0.0.1:5500/index.html#!/login'" class='btn-play'>Log out</button>
            </form>
        </section>

        `;
    }
}

window.customElements.define('play-screen', PlayScreen)