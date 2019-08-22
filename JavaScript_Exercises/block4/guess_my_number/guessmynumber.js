var randomnumber = 1;

var rangefield = document.querySelector('.rangefield');
rangefield.focus();
var rangesubmit = document.querySelector('.rangesubmit');
var rangeresult = document.querySelector('.rangeresult');

var guessfield = document.querySelector('.guessfield');
var guessresult = document.querySelector('.guessresult');
var guesscount = 0;
var numberofguesses = document.querySelector('.numberofguesses');
var previousguesses = document.querySelector('.previousguesses');
var guesssubmit = document.querySelector('.guesssubmit');

var smallorbig = document.querySelector('.smallorbig');
var gif = document.querySelector('.gif');

var resetbutton = document.querySelector('.resetbutton');

function checkRange () {
	var userrandom = Number(rangefield.value);
	var rangenumber = 1;

	if (userrandom > 1) {
		rangenumber = userrandom;
		randomnumber = Math.floor(Math.random() * (userrandom - 1) + 1);
		rangeresult.textContent = (`Range set! Please now guess a number from 1 to ${rangenumber}.`);
		rangefield.value = '';
		numberofguesses.textContent = 'You only have 5 chances of guessing!';
		console.log(randomnumber); //correct answer *wink wink*
		guessfield.focus();
	} else if (userrandom <= 1) {
		rangeresult.textContent ='Sorry, you need to enter a number more than 1.';
	}
}

rangesubmit.addEventListener('click', checkRange);

function checkGuess () {
	var userguess = Number(guessfield.value);

	guesscount++;

	if (guesscount === 0) {
		if (userguess !== randomnumber) {
			numberofguesses.textContent = 'CHANCES LEFT: 5';
		} else if (userguess === randomnumber) {
			numberofguesses.textContent = '';
		}
	} else if (guesscount === 1) {
		if (userguess !== randomnumber) {
			numberofguesses.textContent = 'CHANCES LEFT: 4';
		} else if (userguess === randomnumber) {
			numberofguesses.textContent = '';
		}
	} else if (guesscount === 2)  {
		if (userguess !== randomnumber) {
			numberofguesses.textContent = 'CHANCES LEFT: 3';
		} else if (userguess === randomnumber) {
			numberofguesses.textContent = '';
		}
	} else if (guesscount === 3)  {
		if (userguess !== randomnumber) {
			numberofguesses.textContent = 'CHANCES LEFT: 2';
		} else if (userguess === randomnumber) {
			numberofguesses.textContent = '';
		}
	} else if (guesscount === 4)  {
		if (userguess !== randomnumber) {
			numberofguesses.textContent = 'Last chance left!';
		} else if (userguess === randomnumber) {
			numberofguesses.textContent = '';
		}
	}

	if (guesscount === 1) {
		previousguesses.textContent = "What you've tried so far: ";
	}

	previousguesses.textContent += '/' + userguess + '/' + ' ' ;

	if (userguess === randomnumber) {
		guessresult.textContent = 'Congratulations! You got it right!';
		gif.setAttribute("src", "https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif");
		smallorbig.textContent = '';
		numberofguesses = '';
		gameOver();
	} else if (guesscount === 5) {
		numberofguesses.textContent = 'No more guessing!';
		gif.setAttribute("src", "https://media.giphy.com/media/KwWhqBySq0KPe/giphy.gif");
		smallorbig.textContent = (`The correct answer is: ${randomnumber}`);
		gameOver();
	} else {
		if (userguess < randomnumber) {
			gif.setAttribute("src", "https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif")
			smallorbig.textContent = 'Last guess is too small. A bigger number, perhaps?';
		} else if (userguess > randomnumber) {
			gif.setAttribute("src", "https://media.giphy.com/media/Wq9RLX06zRg4UM42Qf/giphy.gif")
			smallorbig.textContent = 'Last guess is too big. A smaller number, perhaps?';
		}
	}

	guessfield.value = '';
	guessfield.focus();
}

guesssubmit.addEventListener('click', checkGuess);

function gameOver () {
	rangefield.disabled = true;
	rangesubmit.disabled = true;
	guessfield.disabled = true;
	guesssubmit.disabled = true;
	resetbutton = document.createElement('button');
	resetbutton.textContent = 'Play again!'
	document.body.appendChild(resetbutton);
	resetbutton.addEventListener('click', resetGame);
}

function resetGame ()  {
	window.location.reload();
}