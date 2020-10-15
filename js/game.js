// Khởi tạo các biến thành phần
const size = 16; // size của bàn cờ
const countMax = 5; // check biến số để win
let CPlayer = 0; // Current Player (0 là O,1 là X)
let InGame = false;
let l_played = [], l_win = []; // ô đã đánh, ô win
let mode = 0; // 0: no block; 1: block
let timereturn = false; // Time wait
let CurrentUser = JSON.parse(localStorage.getItem('Current-Player')).email;
let OpponentUser = localStorage.getItem('Opponent');
let CurrentPlayer = localStorage.getItem('player');
let db = firebase.firestore();

//New Game

//Set thứ tự player cho mỗi CurrentUser, player1 ứng với CPlayer = 0 được chơi trước.
let iD = localStorage.getItem('roomID');

async function read() {
	let result = await db.collection('ingame').doc(iD).get();
	objPlayer = result.data();
	if (objPlayer.player1 == CurrentUser) {
		localStorage.setItem('player', 'player1');
	} else if (objPlayer.player2 == CurrentUser) {
		localStorage.setItem('player', 'player2');
	}
}
read();

function Loaded() {
	// Set thứ tự player cho mỗi CurrentUser, player1 ứng với CPlayer = 0 được chơi trước.
	// let arrPlayer = ['player1', 'player2'];
	// let x = Math.floor(Math.random() * arrPlayer.length);
	// if (CurrentUser) {
	// 	localStorage.setItem('player', arrPlayer[x]);
	// 	arrPlayer.splice(x, 1);
	// }

	//Load dữ liệu User
	if (CurrentPlayer == 'player1') {
		document.getElementById('user1').innerHTML = CurrentUser;
		document.getElementById('img1').style.backgroundImage = "url('img/Opng.png')";
		document.getElementById('user2').innerHTML = OpponentUser;
		document.getElementById('img2').style.backgroundImage = "url('img/Xpng.png')";
		
	} else if (CurrentPlayer == 'player2') {
		document.getElementById('user1').innerHTML = CurrentUser;
		document.getElementById('img1').style.backgroundImage = "url('img/Xpng.png')";
		document.getElementById('img2').style.backgroundImage = "url('img/Opng.png')";
		document.getElementById('user2').innerHTML = OpponentUser;
	}

	CPlayer = 0; // Current Player (0 is O,1 is X)
	l_played = [], l_win = [];
	let imgp = document.getElementById("imgPlayer");
	imgp.style.backgroundImage = "url('img/Opng.png')";


	let table = document.getElementById("table");
	let row = document.getElementsByClassName("row");
	let square = document.getElementsByClassName("square");

	// Tạo bàn cờ Caro
	table.innerHTML = "";
	for (y = 0; y < size; y++) {
		table.innerHTML += '<tr class="row"></tr>';
		for (x = 0; x < size; x++) {
			let div = '<div class="square" onClick="Click(id)" onMouseOver="MouseOver(id)" onMouseOut="MouseOut(id)"></div>';
			row.item(y).innerHTML += '<td class="col">' + div + '</td>';
			square.item(x + y * size).setAttribute("id", (x + y * size).toString());
			square.item(x + y * size).setAttribute("player", "-1");
		}
	}


	if (CurrentPlayer == 'player1' && CPlayer == 1) {
		document.getElementById('table').style.pointerEvents = 'none';
	} else if (CurrentPlayer == 'player2' && CPlayer == 0) {
		document.getElementById('table').style.pointerEvents = 'none';
	}

}

//Play Game

let updateClick = db.collection('ingame').doc(iD);



function Click(id) {
	if (!InGame) return;
	let square = document.getElementsByClassName("square");
	let pos = parseInt(id);
	if (square.item(pos).getAttribute("player") != "-1") return;
	let path = "url('img/Opng.png')";
	if (CPlayer == 1) path = "url('img/Xpng.png')";
	square.item(pos).style.backgroundImage = path;
	square.item(pos).setAttribute("player", CPlayer.toString());
	l_played.push(pos);

	//Update l_played lên firebase
	updateClick.update({
		l_play: firebase.firestore.FieldValue.arrayUnion(pos)
	});

	let win = WinGame();
	let pwin = CPlayer;


	if (CPlayer == 0) CPlayer = 1;
	else CPlayer = 0;


	let iplayer = "url('img/Opng.png')";
	if (CPlayer == 1) iplayer = "url('img/Xpng.png')";
	let imgp = document.getElementById("imgPlayer");
	imgp.style.backgroundImage = iplayer;

	if (win) {
		// let mess = 'Player with "X" win';
		if (pwin == 1) {
			scoreWithX();
			mess = 'Player with "X" win, + 10 scores';
		}
		if (pwin == 0) {
			scoreWithO();
			mess = 'Player with "O" win, + 10 scores';
		}
		swal(mess).then(() => {
			window.location.href = 'index.html#!/play';
		});

		// Hiển thị lại Button play
		// document.querySelector('.button').style.display = "block";

		InGame = false;
	} else {
		let pgr = document.getElementById("pgrTime");
		pgr.value = pgr.getAttribute("max");
	}




	// Khoá lượt click của Player
	if (CurrentPlayer == 'player1' && CPlayer == 1) {
		document.getElementById('table').style.pointerEvents = 'none';
	} else if (CurrentPlayer == 'player2' && CPlayer == 0) {
		document.getElementById('table').style.pointerEvents = 'none';
	} else document.getElementById('table').style.pointerEvents = 'auto';
}

//2 hàm cộng 10 điểm cho người thắng tương ứng là O hay X win.
function scoreWithO() {
	if (CurrentPlayer == 'player1') {
		return async function update() {
			let result = await db.collection('users').where('email', '==', CurrentUser).get();
			for (let doc of result.docs) {
				let scorePast = doc.data().score;
				console.log(scorePast);
				let scoreCurrent = scorePast + 10;
				await db.collection('users').doc(doc.id).update({
					score: scoreCurrent
				});
			}
		}()
	}
}

function scoreWithX() {
	if (CurrentPlayer == 'player2') {
		return async function update() {
			let result = await db.collection('users').where('email', '==', CurrentUser).get();
			for (let doc of result.docs) {
				let scorePast = doc.data().score;
				console.log(scorePast);
				let scoreCurrent = scorePast + 10;
				await db.collection('users').doc(doc.id).update({
					score: scoreCurrent
				});
			}
		}()
	}
}

// Reload lại bàn cờ từ firebase

async function reload() {
	let result = await db.collection('ingame').doc(iD)
		.get()
	let x = result.data().l_play;


	for (let item of x) {
		Click(item);
	}
}

db.collection('ingame').doc(iD)
	.onSnapshot(
		() => {
			reload();
		}
	)


// Min Max
function maxab(a, b) {
	if (a > b) return a;
	else return b;
}

function minab(a, b) {
	if (a < b) return a;
	else return b;
}

function MouseOver(id) {
	if (!InGame) return;
	let square = document.getElementsByClassName("square");
	let pos = parseInt(id);
	square.item(pos).style.backgroundColor = "#4EFF0B";
}

function MouseOut(id) {
	if (!InGame) return;
	let square = document.getElementsByClassName("square");
	let pos = parseInt(id);
	square.item(pos).style.backgroundColor = "#FFF";
}

//Update bàn cờ
function GetBoard() {
	var TBoard = [];
	var sqr = document.getElementsByClassName("square");
	for (i = 0; i < size * size; i++)
		TBoard.push(parseInt(sqr.item(i).getAttribute("player")));

	return TBoard;
}

function WinGame() {
	let result = false;
	let Board = GetBoard();
	for (x = 0; x < size; x++) {
		for (y = 0; y < size; y++) {
			if (winHor(x, y, Board) || winVer(x, y, Board) || winCross1(x, y, Board) ||
				winCross2(x, y, Board)) {
				let square = document.getElementsByClassName("square");
				for (i = 0; i < l_win.length; i++) {
					square.item(l_win[i]).style.backgroundColor = "#FF0";
				}
				result = true;
			}
		}
	}
	return result;
}

// Điều kiện win là: 5 phần tử liền nhau theo hàng ngang, dọc hoặc chéo

// Theo hàng ngang
function winHor(x, y, Board) {
	l_win = [];
	let count = 0,
		countO = 0; // count opponent
	let player = Board[x + y * size];
	if (player == -1) return false;

	if (x > 0) {
		let p = Board[x - 1 + y * size];
		if (p != player && p != -1) countO++;
	}

	for (i = x; i < size; i++) {
		let p = Board[i + y * size];
		if (p == player && p != -1) {
			count++;
			l_win.push(i + y * size);
		} else {
			if (p != -1) countO++;
			break;
		};
	}
	if (count >= countMax) {
		if (mode == 0)
			return true;
		else {
			if (countO >= 2) return false;
			else return true;
		}
	}
	return false;
}

// Theo hàng dọc
function winVer(x, y, Board) {
	l_win = [];
	let count = 0,
		countO = 0;
	let player = Board[x + y * size];
	if (player == -1) return false;

	if (y > 0) {
		let p = Board[x + (y - 1) * size];
		if (p != player && p != -1) countO++;
	}

	for (i = y; i < size; i++) {
		let p = Board[x + i * size];
		if (p == player && p != -1) {
			count++;
			l_win.push(x + i * size);
		} else {
			if (p != -1) countO++;
			break;
		};
	}
	if (count >= countMax) {
		if (mode == 0)
			return true;
		else {
			if (countO >= 2) return false;
			else return true;
		}
	}
	return false;
}

// Theo hàng chéo 1
function winCross1(x, y, Board) {
	l_win = [];
	if (x > size - countMax || y < countMax - 1) return false;
	let count = 0,
		countO = 0;
	let player = Board[x + y * size];
	if (player == -1) return false;

	if (y < size - 1 && x > 0) {
		let p = Board[x - 1 + (y + 1) * size];
		if (p != player && p != -1) countO++;
	}

	for (i = 0; i <= minab(size - x, y); i++) {
		let p = Board[(x + i) + (y - i) * size];
		if (p == player && p != -1) {
			count++;
			l_win.push((x + i) + (y - i) * size);
		} else {
			if (p != -1) countO++;
			break;
		};
	}
	if (count >= countMax) {
		if (mode == 0)
			return true;
		else {
			if (countO >= 2) return false;
			else return true;
		}
	}
	return false;
}

// Theo hàng chéo 2
function winCross2(x, y, Board) {
	l_win = [];
	if (x > size - countMax || y > size - countMax) return false;
	let count = 0,
		countO = 0;
	let player = Board[x + y * size];
	if (player == -1) return false;

	if (y > 0 && x > 0) {
		let p = Board[x - 1 + (y - 1) * size];
		if (p != player && p != -1) countO++;
	}

	for (i = 0; i < minab(size - x, size - y); i++) {
		let p = Board[(x + i) + (y + i) * size];
		if (p == player && p != -1) {
			count++;
			l_win.push((x + i) + (y + i) * size);
		} else {
			if (p != -1) countO++;
			break;
		};
	}
	if (count >= countMax) {
		if (mode == 0)
			return true;
		else {
			if (countO >= 2) return false;
			else return true;
		}
	}
	return false;
}

// Hàm khởi tạo New Game
function PvsP() {
	Loaded();
	InGame = true;
	let pgr = document.getElementById("pgrTime");
	pgr.value = pgr.getAttribute("max");
	// document.querySelector('.button').style.display = "none";
	LoadProgress();

}

PvsP();

// Button Event
function TimeReturn() {
	let wait = document.getElementById("waitTime");
	document.getElementById('waitTime').style.display = "none";
	if (l_played.length > 0)
		wait.checked = !wait.checked;
	if (wait.checked) timereturn = true;
	else timereturn = false;
	if (timereturn) LoadProgress();
}

function LoadProgress() {
	if (!timereturn || !InGame) return;
	setTimeout(
		function () {
			let pgr = document.getElementById("pgrTime");
			pgr.value--;
			if (pgr.value > 0)
				LoadProgress();
			else {
				if (CPlayer == 1) {
					scoreWithX();
					mess = 'Player with "X" win, + 10 scores';
				}
				if (CPlayer == 0) {
					scoreWithO();
					mess = 'Player with "O" win, + 10 scores';
				}
				swal(mess).then(() => {
					window.location.href = 'index.html#!/play';
				});

				// Hiển thị lại Button play
				// document.querySelector('.button').style.display = "block";

				InGame = false;
			}
		}, 100);
}

