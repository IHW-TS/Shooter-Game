const enemies = [];
let level = 1;
let enemiesKilled = 0;
let killGoal = 10;  // Définissez un objectif initial, par exemple 10 ennemis à tuer


function killAllEnemies() {
    // Obtenez le nombre d'ennemis tués
    const killedEnemiesCount = enemies.length;

    // Augmentez le compteur d'ennemis tués
    enemiesKilled += killedEnemiesCount;

    // Augmentez votre argent, par exemple 10$ par ennemi tué
    money += killedEnemiesCount * 10;

    // Videz le tableau des ennemis
    enemies.length = 0;

    checkLevelUp();
}

function checkLevelUp() {
    if (enemiesKilled >= killGoal) {
        levelUp();
    }
}

function levelUp() {
    level++;
    killGoal *= 1.5;  // Augmente l'objectif de 10 ennemis supplémentaires à chaque niveau
    // Vous pouvez également utiliser une progression exponentielle, par exemple :
    // killGoal *= 2;  // Double l'objectif à chaque niveau
}


//// Affichage des ennemies ////////

function spawnEnemy() {
    const enemy = {
        x: Math.random() * (canvas.width - 40),
        y: 0,
        width: 40,
        height: 40,
        speed: (2 + Math.random() * 3) * level,  // vitesse augmentée par le niveau
        color: 'red',
        resistance: level  // résistance augmentée par le niveau
    };
    // Augmentez le nombre d'ennemis basés sur le niveau
    for (let i = 0; i < level; i++) {
        enemies.push({...enemy});  // Utilisation de la décomposition pour créer des objets ennemis distincts
    }
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

// Define the checkCollision function if it is not defined yet
function checkCollision(obj1, obj2) {
    // Your collision detection code here
    if (obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y) {
        return true;
    }
    return false;
}

// Dans la fonction où vous gérez les collisions entre les projectiles et les ennemis
for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    for (let j = 0; j < enemies.length; j++) {
        const enemy = enemies[j];
        if (checkCollision(projectile, enemy)) {
            enemy.resistance--;
            if (enemy.resistance <= 0) {
                // Ennemi tué
                enemies.splice(j, 1);
                enemiesKilled++;
                money += 10;
                checkLevelUp();  // Vérifiez si le joueur passe au niveau suivant
            }
            // Retirez le projectile
            projectiles.splice(i, 1);
            i--;
            break;
        }
    }
}
