let randomNumber1 = 0;
let randomNumber2 = 0;
function refresh() {
	randomNumber1 = Math.floor(Math.random() * 6) + 1;

	let randomDiceImage = 'dice' + randomNumber1 + '.png';

	let randomImageSource = 'images/' + randomDiceImage;

	document.querySelectorAll('img')[0].setAttribute('src', randomImageSource);

	randomNumber2 = Math.floor(Math.random() * 6) + 1;

	let randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

	document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);
}
refresh();
//If player 1 wins
if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = '🚩 Play 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
	document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
} else {
	document.querySelector('h1').innerHTML = 'Draw!';
}
