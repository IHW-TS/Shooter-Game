const projectiles = [];

function shoot() {
    const projectile = {
        x: player.x + player.width / 2 - 2.5,
        y: player.y,
        width: 5,
        height: 10,
        speed: 10,
        color: 'green'
    };
    projectiles.push(projectile);
}

function updateProjectiles() {
    for (let i = 0; i < projectiles.length; i++) {
        const projectile = projectiles[i];
        projectile.y -= projectile.speed;
        for (let j = 0; j < enemies.length; j++) {
            const enemy = enemies[j];
            if (checkCollision(projectile, enemy)) {
                money += 10;
                enemiesKilled++;
                enemies.splice(j, 1);
                projectiles.splice(i, 1);
                i--;
                j--;
                break;
            }
        }
        if (projectile.y < 0) {
            projectiles.splice(i, 1);
            i--;
        }
    }
}
