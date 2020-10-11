import {
    BaseComponent
} from '../BaseComponent.js'

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
    h2 {
        color: #ffffff;
        font-size: 25px;
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
        background-size: cover;
        width: 100%;
	    min-height:100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15em 0 1em;
    }
    form button {
        color: #001427;
        font-family: Titillium Web, sans-serif;
        font-size: 30px;
        background: #1bbc9b;
        width:200px;
        outline: none;
        border: none;
        border-radius: 5px;
        margin-bottom:15px;
    }
    form button:hover {
        background-color: #007ACC;
        cursor: pointer;
    }

</style>
`;

class PlayScreen extends BaseComponent {

    render() {
        let currentPlayer = JSON.parse(localStorage.getItem('Current-Player'));
        this._shadowRoot.innerHTML = /* html */ `
        ${style}
        
        <section class='play-screen'>
            <h1>CARO ZONE</h1>
            <img src="https://lh3.googleusercontent.com/R2NTrDbjejFDmh-ejLbTZyIv5mY6bN3opl1rfVKibNc-AxlCD9h62lE5yrab0p3babg" style="width:30%; height: 30%">
            <form class='form-play'>
                <h2>Hello, ${currentPlayer.name}</h2>
                <h2>Your current score is:  ${currentPlayer.score}</h2>
                <h2 class="status">Status:  ${currentPlayer.status}</h2>
                <button type='button' class='btn-play'>Play</button>
                <button type='button' class='btn-log-out'>Log out</button>
                <br>
                <button type='button' class='btn-ranking'>Ranking</button>
            </form>
        </section>

        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        `;

        this.$logOut = this._shadowRoot.querySelector(".btn-log-out");
        this.$play = this._shadowRoot.querySelector(".btn-play");
        this.$status = this._shadowRoot.querySelector(".status");

        this.$logOut.onclick = () => {
            localStorage.removeItem("Current-Player")
            localStorage.removeItem("Opponent")
            router.navigate('#!/login')
        }

        this.$play.onclick = async () => {
            await firebase.firestore().collection('queue').add({
                email: currentPlayer.email,
                time: new Date().toLocaleString(),
            })

            //doi status player
            currentPlayer.status = 'waiting';
            this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`
            localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
            //nen them nut huy o day
        }

        this.$back.onclick = () => {
            this._shadowRoot.querySelector('.play-screen').style.display = 'block'
        }

        //reload lai moi 3s
        var timer = setInterval(async () => {

            let queue = await firebase.firestore().collection('queue').get();
            if (queue.docs[1]) {
                //neu ton tai 2 nguoi choi, xoa 2 nguoi choi do ra khoi hang cho, day vao ingame
                await firebase.firestore().collection('ingame').add({
                    player1: queue.docs[0].data().email,
                    player2: queue.docs[1].data().email,
                }).then(() => {

                })
                if (queue.docs[0].data().email == currentPlayer.email || queue.docs[1].data().email == currentPlayer.email) {
                    console.log(queue.docs[0].data());
                    console.log(queue.docs[1].data());
                    if (queue.docs[0].data().email == currentPlayer.email) {
                        localStorage.setItem('Opponent', queue.docs[1].data().email)
                    } else if (queue.docs[1].data().email == currentPlayer.email) {
                        localStorage.setItem('Opponent', queue.docs[0].data().email)
                    }
                    console.log('found!')
                    clearInterval(timer);
                    currentPlayer.status = 'playing';
                    this.$status.innerHTML = `${currentPlayer.status}`;
                    localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
                    router.navigate('main')
                }
            }
        }, 5000);
        firebase.firestore().collection('ingame').onSnapshot(
            async () => {
                let result1 = await firebase.firestore().collection('queue').where('email', '==', currentPlayer.email).get();
                if (currentPlayer.status == 'playing') {
                    if (result1.docs[0]) {
                        console.log(result1.docs[0].data())
                        setTimeout(async () => {
                            await firebase.firestore().collection('queue').doc(result1.docs[0].id).delete();
                        }, 10000);

                    }
                }
            }
        )


    }




}


window.customElements.define('play-screen', PlayScreen)