const enemies = [];

function spawnEnemy() {
    const enemy = {
        x: Math.random() * (canvas.width - 40),
        y: 0,
        width: 40,
        height: 40,
        speed: 2 + Math.random() * 3,
        color: 'red'
    };
    enemies.push(enemy);
}

function updateEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        enemy.y += enemy.speed;
        if (checkCollision(player, enemy)) {
            playerLives--;
            enemies.splice(i, 1);
            i--;
        } else if (enemy.y > canvas.height) {
            playerLives--;  
            enemies.splice(i, 1);
            i--;
        }
    }
}