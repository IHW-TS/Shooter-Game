import { buySpeedUpgrade } from './shop/speedUpgrade.js';
import { buyAlly, drawAllies } from './shop/ally.js';

export function drawShop() {
    gamePaused = true;  
    // Dessiner le fond de la boutique
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width / 4, canvas.height / 4, canvas.width / 2, canvas.height / 2);

    // Dessiner un bouton pour acheter une mise à niveau de vitesse de balle
    drawButton('Speed Up ($10)', canvas.width / 2 - 150, canvas.height / 2 - 20, 100, 40);

    // Dessiner un bouton pour acheter une nouvelle arme (carré qui tire à côté de vous)
    drawButton('Buy Ally ($20)', canvas.width / 2 + 50, canvas.height / 2 - 20, 100, 40);
}

function drawButton(text, x, y, width, height) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    const textSize = ctx.measureText(text);
    ctx.fillText(text, x + width / 2 - textSize.width / 2, y + height / 2 + 7);
}


function handleShopClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Vérifier si le clic était sur le bouton de mise à niveau de la vitesse
    if (
        mouseX >= canvas.width / 2 - 150 && mouseX <= canvas.width / 2 - 50 &&
        mouseY >= canvas.height / 2 - 20 && mouseY <= canvas.height / 2 + 20
    ) {
        buySpeedUpgrade(player, 10);  // Acheter une mise à niveau pour $10
    }

    // Vérifier si le clic était sur le bouton d'achat d'une nouvelle arme
    if (
        mouseX >= canvas.width / 2 + 50 && mouseX <= canvas.width / 2 + 150 &&
        mouseY >= canvas.height / 2 - 20 && mouseY <= canvas.height / 2 + 20
    ) {
        buyAlly(player, 20);  // Acheter une nouvelle arme pour $20
    }
}


function toggleShop() {
    shopOpen = !shopOpen;
    gamePaused = shopOpen;
    if (shopOpen) {
        canvas.addEventListener('click', handleShopClick);
    } else {
        canvas.removeEventListener('click', handleShopClick);
    }
}

function buyWeaponUpgrade(player, upgradePrice) {
    if (player.money >= upgradePrice) {
        player.money -= upgradePrice;
        player.bulletSpeed += 5;
        player.bulletSize += 2;
    } else {
        alert('Vous n\'avez pas assez d\'argent!');
    }
}

function buyWeapon(player, weaponPrice) {
    if (player.money >= weaponPrice) {
        player.money -= weaponPrice;
        // Ajoutez la logique pour donner l'arme au joueur ici
    } else {
        alert('Vous n\'avez pas assez d\'argent!');
    }
}

buyWeaponUpgrade(player, 10);
buyWeapon(player, 20);
drawAllies(ctx)
