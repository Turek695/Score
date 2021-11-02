const scoreP1 = document.querySelector('.score-p1');
const scoreP2 = document.querySelector('.score-p2');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const selectLimit = document.querySelector('#playTo');

scoreP1.textContent = 0;
scoreP2.textContent = 0;

p1Button.addEventListener('click', () => {
    scoreCounter(scoreP1, scoreP2, selectLimit)
})

p2Button.addEventListener('click', () => {
    scoreCounter(scoreP2, scoreP1, selectLimit)
})

resetButton.addEventListener('click', resetGame)
selectLimit.addEventListener('change', resetGame)

function resetGame() {
    scoreP2.textContent = 0; // reset Player 2 score
    scoreP2.classList.remove('score_win', 'score_lose');
    scoreP1.textContent = 0; // reset Player 1 score
    scoreP1.classList.remove('score_win', 'score_lose');
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Button.classList.remove('button_filter_opacity');
    p2Button.classList.remove('button_filter_opacity');
}

function scoreCounter(incrScore, compScore, goal) {
    // pracowanie na zawartości span zamiast na stworzonej zmiennej - można?
    incrScore.textContent = parseInt(incrScore.textContent) + 1; // increment Player score
    if (incrScore.textContent == goal.value) { // checking if point limit is reached
        // winning button parameters change:
        incrScore.classList.add('score_win');
        p2Button.disabled = true;
        p2Button.classList.add('button_filter_opacity');
        // loosing button parameters change:
        compScore.classList.add('score_lose');
        p1Button.disabled = true;
        p1Button.classList.add('button_filter_opacity');
    }
}