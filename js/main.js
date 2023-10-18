let playerLives = 10;
let enemiesKilled = 0;
let money = 0;
let spawnEnemyInterval;

function gameLoop() {
    if (!isPaused) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        
        player.draw();
        player.move();

        if (keys.Space) {
            shoot();
            keys.Space = false;  
        }

        updateProjectiles();
        projectiles.forEach(projectile => {
            ctx.fillStyle = projectile.color;
            ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
        });

        updateEnemies();
        enemies.forEach(enemy => {
            ctx.fillStyle = enemy.color;
            ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        });

        drawHUD();
    }

    if (playerLives <= 0) {
        displayGameOver();
        return; 
    }

    requestAnimationFrame(gameLoop);
}

function drawHUD() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Vies: ' + playerLives, 10, 20);
    ctx.fillText('Ennemis éliminés: ' + enemiesKilled, 10, 40);
    ctx.fillText('Argent: $' + money, 10, 60);
}

function displayGameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2);
}

function startGame() {
    spawnEnemyInterval = setInterval(spawnEnemy, 1000);  // Démarrage de l'intervalle pour faire apparaître des ennemis
}

function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
        clearInterval(spawnEnemyInterval);  // Annulation de l'intervalle lorsque le jeu est mis en pause
    } else {
        spawnEnemyInterval = setInterval(spawnEnemy, 1000);  // Redémarrage de l'intervalle lorsque le jeu est repris
    }
}
startGame();
gameLoop();
