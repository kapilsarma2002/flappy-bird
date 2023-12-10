const bird = document.querySelector('.bird');
const gameContainer = document.querySelector('.game-container');

let birdTop = 220;
let gravity = 1;

function jump() {
  if (birdTop > 20) {
    birdTop -= 20;
    bird.style.top = birdTop + 'px';
  }
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    jump();
  }
});

function fall() {
  birdTop += gravity;
  bird.style.top = birdTop + 'px';

  if (birdTop < gameContainer.clientHeight - bird.clientHeight) {
    requestAnimationFrame(fall);
  } else {
    alert('Game Over!');
    location.reload(); // Restart the game
  }
}

fall();
