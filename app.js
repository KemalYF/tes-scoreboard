const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const winPointsOption = document.querySelector('#winpoints');

let p1Score = 0;
let p2Score = 0;
let winPoints = 3;
let isGameOver = false;

p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winPoints) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
            p1Display.textContent += ' - Winner!';
            p2Display.textContent += ' - Loser!';
        }
        
    p1Display.textContent = p1Score;
    } 

});

p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winPoints) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            p2Display.textContent += ' - Winner!';
            p1Display.textContent += ' - Loser!';
        }
        p2Display.textContent = p2Score;
    }     

});

function reset() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
};

resetButton.addEventListener('click', reset);

winPointsOption.addEventListener('change', function() {
    winPoints = parseInt(this.value);
    reset();
});