const spaceship = document.querySelector('.spaceship');
let direction = 1;
let posX = 0;
let posY = window.innerHeight / 2;

function moveSpaceship() {
  posX += 5 * direction;
  
  if (posX > window.innerWidth - 60 || posX < 0) {
    direction *= -1;
    posY = Math.random() * (window.innerHeight - 100);
  }

  spaceship.style.left = posX + 'px';
  spaceship.style.top = posY + 'px';

  createTrail(posX, posY);
  requestAnimationFrame(moveSpaceship);
}

function createTrail(x, y) {
  const trail = document.createElement('div');
  trail.classList.add('trail');
  trail.style.left = (x + 20) + 'px';
  trail.style.top = (y + 20) + 'px';
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 400);
}

moveSpaceship();
