var userscore = document.querySelector('.userscore');
var compscore = document.querySelector('.compscore');
var turnresult= document.querySelector('.turnresult');
var matchresult= document.querySelector('.matchresult');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors= document.querySelector('.scissors');

var userchoice = 0;
var compchoice = 0;

var userscorenum = 0;
var compscorenum = 0;
var drawsnum = 0;

var usermatchscore = 0;
var compmatchscore = 0;

userscore.textContent = usermatchscore;
compscore.textContent = compmatchscore;

rock.addEventListener('click', function () {choose(1);});
paper.addEventListener('click', function () {choose(2);});
scissors.addEventListener('click', function () {choose(3);});

function choose (n) {
	if (matchresult.textContent !== '') {
		matchresult.textContent = '';
		matchresult.style.backgroundColor = "white";
	}
	userchoice = n;
	compchoice = Math.floor(Math.random() * 3 + 1);
	checkWhoWins (userchoice, compchoice);
}

function restartScores () {
	userscorenum *= 0;
	compscorenum *= 0;
	drawsnum *= 0;
}

function checkWhoWins (userchoice, compchoice) {

	if ((userchoice === 1 && compchoice === 2) || (userchoice === 2 && compchoice === 3) || (compchoice === 1 && userchoice === 3)){ // rock < paper
		compscorenum++;
		console.log('compscorenum: ' + compscorenum);
		turnresult.textContent = 'The computer won this turn!';
	}

	if ((userchoice === 1 && compchoice === 3) || (compchoice === 1 && userchoice === 2) || (compchoice === 2 && userchoice === 3)){ // paper < scissors
		userscorenum++;
		console.log('userscorenum: ' + userscorenum);
		turnresult.textContent = 'You won this turn!';
	}

	if ((userchoice === 1 && compchoice === 1) || (userchoice === 2 && compchoice === 2) || (userchoice === 3 && compchoice === 3)){ // draws
		drawsnum++;
		console.log('drawsnum: ' + drawsnum);
		turnresult.textContent = (`It's a draw!`);
	}

	checkScores (compscorenum, userscorenum);
}

function checkScores (compscorenum, userscorenum) {
	if (userscorenum === 2 || compscorenum === 2) {

		if (userscorenum > compscorenum) {
			usermatchscore++;
			userscore.textContent = usermatchscore;
			matchresult.style.backgroundColor = "#5fbdbc";
			matchresult.textContent = 'You won this match!';
			restartScores ();
		} 

		if (userscorenum < compscorenum) {
			compmatchscore++;
			compscore.textContent = compmatchscore;
			matchresult.style.backgroundColor = "#f7be3b";
			matchresult.textContent = 'The computer won this match!';
			restartScores ();
		}
	}	
}
