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
    .ranking {
            border: 0;
            background: url(https://images.squarespace-cdn.com/content/v1/52ec28b3e4b0644432d9fd33/1454538036222-JT0VJJKPI23Q2PQ9WHQM/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/IMG_0034.JPG?format=1500w) no-repeat center;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
        }
        .ranking > header {
            margin: 0 auto;
            padding: 1em;
            text-align: center;
        }
        .ranking > header h1 {
            font-weight: 600;
            font-size: 3em;
            margin: 0;
        }
        .wrapper {
            line-height: 1.5em;
            margin: 0 auto;
            padding: 2em 0 3em;
            width: 90%;
            max-width: 2000px;
            overflow: hidden;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            background: #fff;
        }
        th {
            background-color: #326295;
            font-weight: bold;
            color: #fff;
            white-space: nowrap;
        }
        td, th {
            padding: 1em 1.5em;
            text-align: left;
        }
        tbody th {
            background-color: #2ea879;
        }
        tbody tr:nth-child(2n-1) {
            background-color: #f5f5f5;
            transition: all .125s ease-in-out;
        }
        tbody tr:hover {
            background-color: rgba(50,98,149,.3);
        }
        td.rank {
            text-transform: capitalize;
        }
        .btn-back {
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
        .btn-back:hover {
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
        
    
            <div class="ranking">
            <header>
            <h1>Top 10 Ranking</h1>
            </header>
            <div class="wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td class="rank">1</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                        <tr>
                    <td class="rank">2</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">3</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">4</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">5</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">6</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">7</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">8</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                    <tr>
                    <td class="rank">9</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                <tr>
                    <td class="rank">10</td>
                    <td class="name"></td>
                    <td class="points"></td>
                </tr>
                </tbody>
                </table>
                <br>
                <button class='btn-back'>Back</button>
            </div>
            </div>
    
            


        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        `;
        this.$ranking = this._shadowRoot.querySelector(".btn-ranking");
            this.$back = this._shadowRoot.querySelector(".btn-back");
    
            this.$ranking.onclick = () => {
                var x = this._shadowRoot.querySelector('.play-screen');
                if (x.style.display === 'none') {
                    x.style.display = 'block';
                } else {
                    x.style.display = 'none';
                }
            };

        this.$logOut = this._shadowRoot.querySelector(".btn-log-out");
        this.$play = this._shadowRoot.querySelector(".btn-play");
        this.$status = this._shadowRoot.querySelector(".status");

        //------------------------------
























       




        this.$logOut.onclick = () => {
            localStorage.clear();
            router.navigate('#!/login')
        }

        //bam nut findgame
        this.$play.onclick = async () => {

            if (currentPlayer.status == `online`) {
                //neu stt dang onl, chuyen thanh waiting
                await firebase.firestore().collection('queue').doc(currentPlayer.email).set({
                    email: currentPlayer.email,
                    time: new Date().toLocaleString(),
                })
                currentPlayer.status = 'waiting';
                this.$play.innerHTML = `Cancel`
                this.$status.innerHTML = `${currentPlayer.status}`
                localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
            } else if (currentPlayer.status == `waiting`) {
             
                await firebase.firestore().collection('queue').doc(currentPlayer.email).delete();
                currentPlayer.status = `online`;
                this.$play.innerHTML = `Play`
                this.$status.innerHTML = `${currentPlayer.status}`
                localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
            }
            
        }

        this.$back.onclick = () => {
            this._shadowRoot.querySelector('.play-screen').style.display = 'block'
        }

        //moi 5s: 
        var timer = setInterval(async () => {

            let queue = await firebase.firestore().collection('queue').get();
            if (queue.docs[1]) {
                //neu ton tai 2 nguoi choi, them 2 nguoi choi vao "dang choi game" (collection 'ingame')
                await firebase.firestore().collection('ingame').add({
                    player1: queue.docs[0].data().email,
                    player2: queue.docs[1].data().email,
                })

                //dkien logic:

                //player phai o trong ingame moi duoc xoa!

                // if (queue.docs[0].data().email == currentPlayer.email || queue.docs[1].data().email == currentPlayer.email) {
                //     //neu 1 trong 2 nguoi choi la player tren
                   
                //     if (queue.docs[0].data().email == currentPlayer.email) {
                //         localStorage.setItem('Opponent', queue.docs[1].data().email)
                //     } else if (queue.docs[1].data().email == currentPlayer.email) {
                //         localStorage.setItem('Opponent', queue.docs[0].data().email)
                //     }
                //     console.log('found!')

                //     //lay ra id room
                //     let find1 = await firebase.firestore().collection('ingame').where('player1','==',currentPlayer.email).get();
                //     let find2 = await firebase.firestore().collection('ingame').where('player2','==',currentPlayer.email).get();
                //     if(find1.docs[0]){
                //         localStorage.setItem('roomID',find1.docs[0].id)
                //     } else if(find2.docs[0]){
                //         localStorage.setItem('roomID',find1.docs[0].id)
                //     }


                //     clearInterval(timer);
                //     currentPlayer.status = 'playing';
                //     this.$status.innerHTML = `${currentPlayer.status}`;
                //     localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
                //     router.navigate('main')
                // }
            }
        }, 10000);
        

        firebase.firestore().collection('ingame').onSnapshot(
            async () => {
                //neu player ton tai trong 1 phong nao do, set opponent
                let player1 = await firebase.firestore().collection('ingame').where('player1', '==', currentPlayer.email).get();
                let player2 = await firebase.firestore().collection('ingame').where('player2', '==', currentPlayer.email).get();
                if(player1.docs[0] || player2.docs[0]){
                    if(player1.docs[0]){
                        localStorage.setItem('Opponent',player1.docs[0].data().player2);
                        localStorage.setItem('roomID',player1.docs[0].id);
                    } else if(player2.docs[0]) {
                        localStorage.setItem('Opponent',player2.docs[0].data().player1);
                        localStorage.setItem('roomID',player2.docs[0].id);
                    }
                    await firebase.firestore().collection('queue').doc(currentPlayer.email).delete();
                }
                console.log('found')
                router.navigate('main')
               
            }
        )


    }




}

//set inter val la phai 5s moi chay?
window.customElements.define('play-screen', PlayScreen)



//moi 5s, day 2 nguoi choi trong hang cho vao phong game

//nhan ra su thay doi cua phong game, neu player ton tai trong  1 doc nao do cua phong game, set opponent, room id, xoa doc(id) currentplayer, navigate den trang de choi











      //reload lai moi 3s
        var timer = setInterval(async () => {

            let queue = await firebase.firestore().collection('queue').get();
            if (queue.docs[1]) {
                 //neu ton tai 2 nguoi choi, them 2 nguoi choi vao "dang choi game" (collection 'ingame')
                await firebase.firestore().collection('ingame').add({
                    player1: queue.docs[0].data().email,
                    player2: queue.docs[1].data().email,
                });

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