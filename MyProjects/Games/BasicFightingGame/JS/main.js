const canvas = document.querySelector(`canvas`);
const c = canvas.getContext(`2d`);

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.7;
class Sprite {
  constructor({ position, velocity, color = `purple`, offset }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      offset,
      width: 100,
      height: 50,
    };
    this.color = color;
    this.isAttacking;
    this.health = 100;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    // attack box
    if (this.isAttacking) {
      c.fillStyle = `white`;
      c.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
  }

  update() {
    this.draw();
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }

  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
  }
}

const playerOne = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
});
console.log(playerOne);

const playerTwo = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: `gray`,
  offset: {
    x: -50,
    y: 0,
  },
});
console.log(playerTwo);

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};

function rectangularCollision({ rect1, rect2 }) {
  return (
    rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
    rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
    rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
    rect1.attackBox.position.y <= rect2.position.y + rect2.height
  );
}

function determineWinner({ playerOne, playerTwo, timerId }) {
    clearTimeout(timerId)
    document.querySelector(`#displayText`).style.display = `flex`;
  if (playerOne.health === playerTwo.health) {
    document.querySelector(`#displayText`).innerHTML = `Tie`;
  } else if (playerOne.health > playerTwo.health) {
    document.querySelector(`#displayText`).innerHTML = `Player 1 Wins`;
  } else if (playerTwo.health > playerOne.health) {
    document.querySelector(`#displayText`).innerHTML = `Player 2 Wins`;
  }
}

let timer = 60;
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector(`#timer`).innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ playerOne, playerOne, timerId });
  }
}

decreaseTimer();

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = `black`;
  c.fillRect(0, 0, canvas.width, canvas.height);
  playerOne.update();
  playerTwo.update();

  playerOne.velocity.x = 0;
  playerTwo.velocity.x = 0;
  //player movement
  if (keys.a.pressed && playerOne.lastKey === `a`) {
    playerOne.velocity.x = -5;
  } else if (keys.d.pressed && playerOne.lastKey === `d`) {
    playerOne.velocity.x = 5;
  }

  //enemy movement
  if (keys.ArrowLeft.pressed && playerTwo.lastKey === `ArrowLeft`) {
    playerTwo.velocity.x = -5;
  } else if (keys.ArrowRight.pressed && playerTwo.lastKey === `ArrowRight`) {
    playerTwo.velocity.x = 5;
  }

  // collision detection
  if (
    rectangularCollision({
      rect1: playerOne,
      rect2: playerTwo,
    }) &&
    playerOne.isAttacking
  ) {
    playerOne.isAttacking = false;
    playerTwo.health -= 20;
    document.querySelector(`#enemyHealth`).style.width = playerTwo.health + `%`;
  }

  if (
    rectangularCollision({
      rect1: playerTwo,
      rect2: playerOne,
    }) &&
    playerTwo.isAttacking
  ) {
    playerTwo.isAttacking = false;
    playerOne.health -= 20;
    document.querySelector(`#playerHealth`).style.width =
      playerOne.health + `%`;
    console.log(`player 2 attack`);
  }

  // end game based on health
  if (playerTwo.health <= 0 || playerOne.health <= 0) {
    determineWinner({ playerOne, playerTwo, timerId });
  }
};
animate();

window.addEventListener(`keydown`, (event) => {
  console.log(event.key);
  switch (event.key) {
    case `d`:
      keys.d.pressed = true;
      playerOne.lastKey = `d`;
      break;
    case `a`:
      keys.a.pressed = true;
      playerOne.lastKey = `a`;
      break;
    case `w`:
      playerOne.velocity.y = -20;
      break;
    case ` `:
      playerOne.attack();
      break;

    case `ArrowRight`:
      keys.ArrowRight.pressed = true;
      playerTwo.lastKey = `ArrowRight`;
      break;
    case `ArrowLeft`:
      keys.ArrowLeft.pressed = true;
      playerTwo.lastKey = `ArrowLeft`;
      break;
    case `ArrowUp`:
      keys.ArrowUp.pressed = true;
      playerTwo.velocity.y = -20;
      break;
    case `ArrowDown`:
      keys.ArrowUp.pressed = true;
      playerTwo.isAttacking = true;
      break;
  }
});

window.addEventListener(`keyup`, (event) => {
  switch (event.key) {
    case `d`:
      keys.d.pressed = false;
      break;
    case `a`:
      keys.a.pressed = false;
      break;
    case `w`:
      keys.w.pressed = false;
      break;
  }

  //enemy keys
  switch (event.key) {
    case `ArrowRight`:
      keys.ArrowRight.pressed = false;
      break;
    case `ArrowLeft`:
      keys.ArrowLeft.pressed = false;
      break;
    case `ArrowUp`:
      keys.ArrowUp.pressed = false;
      break;
  }
});
