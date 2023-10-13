let enemies = [];

function handleEnemies() {
    enemies.forEach((enemy, enemyIndex) => {
        enemy.y += enemy.speed;
        if (enemy.y > canvas.height) {
            enemies.splice(enemyIndex, 1);
            player.lives--; 
        }
    });

    // Collision avec le joueur
    enemies.forEach((enemy, enemyIndex) => {
        if (
            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y
        ) {
            player.lives--;
            enemies.splice(enemyIndex, 1);
        }
    });

    // Collision avec les balles
    player.bullets.forEach((bullet, bulletIndex) => {  // Utilisation de player.bullets
        enemies.forEach((enemy, enemyIndex) => {
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {
                player.bullets.splice(bulletIndex, 1);  // Utilisation de player.bullets
                enemies.splice(enemyIndex, 1);
                player.score++;
                player.money += 10;
            }
        });
    });
}

function drawEnemies() {
    ctx.fillStyle = 'green';
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

function spawnEnemy() {
    let enemyWidth = 50;
    let enemyHeight = 50;
    let enemyX = Math.random() * (canvas.width - enemyWidth);
    let enemySpeed = Math.random() * 2 + 1;
    enemies.push({ x: enemyX, y: -enemyHeight, width: enemyWidth, height: enemyHeight, speed: enemySpeed });
}

setInterval(spawnEnemy, 2000);
