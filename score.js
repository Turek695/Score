const scoreP1 = document.querySelector('.score-p1');
const scoreP2 = document.querySelector('.score-p2');
const buttons = document.querySelectorAll('.button');
const select = document.querySelector('.select');

scoreP1.textContent = 0;
scoreP2.textContent = 0;

buttons[2].addEventListener('click', function () {
    scoreP2.textContent = 0; // reset Player 2 score
    scoreP2.classList.remove('score_win', 'score_lose');
    scoreP1.textContent = 0; // reset Player 1 score
    scoreP1.classList.remove('score_win', 'score_lose');
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[0].classList.remove('button_filter_opacity');
    buttons[1].classList.remove('button_filter_opacity');
})

buttons[0].addEventListener('click', () => {
    scoreCounter(scoreP1, scoreP2, select)
})

buttons[1].addEventListener('click', () => {
    scoreCounter(scoreP2, scoreP1, select)
})

function scoreCounter(incrScore, compScore, goal) {
    incrScore.textContent = parseInt(incrScore.textContent) + 1; // increment Player score
    if (incrScore.textContent == goal.value) {
        incrScore.classList.add('score_win');
        buttons[1].disabled = true;
        buttons[1].classList.add('button_filter_opacity');
        compScore.classList.add('score_lose');
        buttons[0].disabled = true;
        buttons[0].classList.add('button_filter_opacity');
    }
}