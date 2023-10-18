let playerLives = 10;
let enemiesKilled = 0;
let money = 0;

function gameLoop() {
    if (!isPaused) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dessinez le joueur
        player.draw();

        // Mettez à jour et dessinez les projectiles
        updateProjectiles();
        projectiles.forEach(projectile => {
            ctx.fillStyle = projectile.color;
            ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height);
        });

        // Mettez à jour et dessinez les ennemis
        updateEnemies();
        enemies.forEach(enemy => {
            ctx.fillStyle = enemy.color;
            ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        });

        // Dessinez le tableau de bord (HUD)
        drawHUD();
    }

    requestAnimationFrame(gameLoop);
}

// Logique pour faire apparaître les ennemis à intervalles réguliers
setInterval(spawnEnemy, 1000);

function drawHUD() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Vies: ' + playerLives, 10, 20);
    ctx.fillText('Ennemis éliminés: ' + enemiesKilled, 10, 40);
    ctx.fillText('Argent: $' + money, 10, 60);
}

gameLoop();
