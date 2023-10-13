import { isGamePaused } from './util.js';
import * as player from './player.js';
import * as enm from './enemies.js';


let shopOpen = false;

function gameLoop() {
    if (!isGamePaused() && player.lives > 0) {
        update();
        draw();
    } else if (shopOpen) {
        draw();
    } else if (player.lives <= 0) {
        drawGameOver();
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();

function update() {
    player.handlePlayerMovement();
    player.handleBullets();
    enm.handleEnemies();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.drawPlayer();
    player.drawBullets();
    enm.drawEnemies();
    drawAllies(ctx);
    drawHUD();

    if (shopOpen) {
        drawShop();
    }
}

function drawHUD() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + player.score, 10, 30);
    ctx.fillText('Money: ' + player.money, 10, 60);
    ctx.fillText('Lives: ' + player.lives, 10, 90);
}

function drawGameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2 - 20);
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + player.score, canvas.width / 2 - 40, canvas.height / 2 + 20);
}



