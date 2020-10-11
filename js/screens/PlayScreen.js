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

    /** ranking */

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
        <h1>Ranking Top 10</h1>
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

        this.$logOut = this._shadowRoot.querySelector(".btn-log-out");
        this.$play = this._shadowRoot.querySelector(".btn-play");
        this.$ranking = this._shadowRoot.querySelector(".btn-ranking");
        this.$status = this._shadowRoot.querySelector(".status");
        this.$back = this._shadowRoot.querySelector(".btn-back");

        this.$logOut.onclick = () => {
            localStorage.clear();
            router.navigate('#!/login')
        }

        this.$play.onclick = async () => {
            //doi status player

<<<<<<< HEAD
            if (currentPlayer.status == `online`) {
                await firebase.firestore().collection('queue').add({
                    email: currentPlayer.email,
                    time: new Date().toLocaleString(),
                })
                currentPlayer.status = 'waiting';
                this.$play.innerHTML = `Cancel`
                this.$status.innerHTML = `${currentPlayer.status}`
                localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
            } else if (currentPlayer.status == `waiting`) {
                let result = await firebase.firestore().collection('queue').where('email', '==', currentPlayer.email).get();
                await firebase.firestore().collection('queue').doc(result.docs[0].id).delete();
                currentPlayer.status = `online`;
                this.$play.innerHTML = `Play`
                this.$status.innerHTML = `${currentPlayer.status}`
                localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
            }

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
                    console.log('found!')
                    clearInterval(timer);
                    currentPlayer.status='playing';
                    this.$status.innerHTML = `${currentPlayer.status}`;
                    localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));
=======
        this.$ranking.onclick = () => {
            var x = this._shadowRoot.querySelector('.play-screen');
            if (x.style.display === 'none') {
                x.style.display = 'block';
            } else {
                x.style.display = 'none';
            }
        };

        this.$back.onclick = () => {
            this._shadowRoot.querySelector('.play-screen').style.display = 'block'
        }

        firebase.firestore().collection('queue').onSnapshot(async (result) => {
            //t tứk á :(((((
            if (currentPlayer.status = 'waiting') {
                if (result.docs[0]) {
                    if (result.docs[1]) {
                        if (result.docs[0].data().email == currentPlayer.email) {

                            localStorage.setItem('Opponent', JSON.stringify(result.docs[1].data()));

                            currentPlayer.status = 'playing';
                            this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`;

                            localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));

                            await firebase.firestore().collection('queue').doc(result.docs[0].id).delete();

                            swal(
                                'Good job!',
                                'You clicked the button!',
                                'success'
                            ).then(() => {
                                setTimeout(() => {
                                    router.navigate('google.com')
                                }, 3000)
                            });



                        } else if (result.docs[1].data().email == currentPlayer.email) {
                            localStorage.setItem('Opponent', JSON.stringify(result.docs[0].data()));

                            currentPlayer.status = 'playing';
                            this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`;


                            localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));

                            await firebase.firestore().collection('queue').doc(result.docs[1].id).delete();

                            swal(
                                'Good job!',
                                'You clicked the button!',
                                'success'
                            ).then(() => {
                                setTimeout(() => {
                                    router.navigate('google.com')
                                }, 3000)
                            });

                        }

                    }
                    if (localStorage.getItem('Opponent')) {
                        currentPlayer.status = 'playing';
                        this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`
                        await firebase.firestore().collection('queue').doc(result.docs[0].id).delete();
                        swal(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                        ).then(() => {
                            setTimeout(() => {
                                router.navigate('google.com')
                            }, 3000)
                        });
                    }
>>>>>>> 6b74648a290994f7eb960ff2892ca71c8215f9b0
                }
                // await firebase.firestore().collection('queue').doc(queue.docs[1].id).delete();
                // await firebase.firestore().collection('queue').doc(queue.docs[0].id).delete();
            }
        }, 5000);
        // firebase.firestore().collection('ingame').onSnapshot(async () => {
        //     let result1 = await firebase.firestore().collection('ingame').where('player1', '==', currentPlayer.email).get();
        //     let result2 = await firebase.firestore().collection('ingame').where('player2', '==', currentPlayer.email).get();

        //     if (result2.docs[0]){
        //         console.log(2);
        //         localStorage.setItem("Opponent",result1.docs[0].data().player1);
                
        //         router.navigate('main');
        //     } else if (result1.docs[0]){
        //         console.log(1);
        //         localStorage.setItem("Opponent",result2.docs[0].data().player2)
               
        //         router.navigate('main');
        //     } 
        //     //neu 2 thanh nien nay xuat hien trong ingame thi tuc la cno dang choi/chuan bi choi, navigate
            
        // });


        // firebase.firestore().collection('queue').onSnapshot(async (result) => {
        //     //t tứk á :(((((
        //     if (currentPlayer.status == 'waiting') {
        //        // if (result.docs[0]) {
        //             if (result.docs[1]) {
        //                 if (result.docs[0].data().email == currentPlayer.email) {

        //                     localStorage.setItem('Opponent', JSON.stringify(result.docs[1].data()));

        //                     currentPlayer.status = 'playing';
        //                     this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`;

        //                     localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));

        //                     await firebase.firestore().collection('queue').doc(result.docs[0].id).delete();

        //                     //thong bao da tim thay doi thu
        //                     swal(
        //                         'Đã tìm thấy đối thủ !',
        //                         'bạn đã sẵn sàng chưa?',
        //                         'success'
        //                     ).then(() => {
        //                         setTimeout(() => {
        //                             router.navigate('google.com')
        //                         }, 3000)
        //                     });

        //                 }  if (result.docs[1].data().email == currentPlayer.email) {
        //                     localStorage.setItem('Opponent', JSON.stringify(result.docs[0].data()));

        //                     currentPlayer.status = 'playing';
        //                     this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`;


        //                     localStorage.setItem('Current-Player', JSON.stringify(currentPlayer));

        //                     await firebase.firestore().collection('queue').doc(result.docs[1].id).delete();
        //                     //thong bao da tim thay doi thu
        //                     swal(
        //                         'Đã tìm thấy đối thủ !',
        //                         'bạn đã sẵn sàng chưa?',
        //                         'success'
        //                     ).then(() => {
        //                         setTimeout(() => {
        //                             router.navigate('google.com')
        //                         }, 3000)
        //                     });

        //                 }

        //             }



        //             // if (localStorage.getItem('Opponent')) {
        //             //     currentPlayer.status = 'playing';
        //             //     this.$status.innerHTML = `<h2 class="status">${currentPlayer.status}</h2>`
        //             //     await firebase.firestore().collection('queue').doc(result.docs[0].id).delete();
        //             //     //thong bao da tim thay doi thu 
        //             //     swal(
        //             //         'Đã tìm thấy đối thủ !',
        //             //         'bạn đã sẵn sàng chưa?',
        //             //         'success'
        //             //     ).then(() => {
        //             //         setTimeout(() => {
        //             //             router.navigate('google.com')
        //             //         }, 3000)
        //             //     });
        //             // }
        //         //}
        //     }
        // })







    }
}

window.customElements.define('play-screen', PlayScreen)