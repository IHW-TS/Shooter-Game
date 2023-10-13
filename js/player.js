import { togglePause, isGamePaused } from './util.js';

export let player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    speed: canvas.width * 0.005,
    lives: 10,
    score: 0,
    money: 0,
    bulletSpeed: 10,
    bulletSize: 10
};

let bullets = [];
let keys = {};

export function handlePlayerMovement() {
    if (keys['ArrowLeft'] && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
    if (keys['ArrowUp'] && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys['ArrowDown'] && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
}

export function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

export function drawBullets() {
    ctx.fillStyle = 'red';
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
}

export function handleBullets() {
    bullets.forEach((bullet, bulletIndex) => {
        bullet.y -= bullet.speed;
        if (bullet.y < 0) {
            bullets.splice(bulletIndex, 1);
        }
    });
}
window.addEventListener('keydown', (event) => {
    keys[event.key] = true;
    if (event.key === ' ') {
        bullets.push({ x: player.x + player.width / 2 - player.bulletSize / 2, y: player.y, width: player.bulletSize, height: player.bulletSize * 2, speed: player.bulletSpeed });
    } else if (event.key === 'p') {
        togglePause();
    } else if (event.key === 'b') {
        toggleShop();
    }
});

window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});
