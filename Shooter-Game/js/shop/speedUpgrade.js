export function buySpeedUpgrade(player, price) {
    if (player.money >= price) {
        player.money -= price;
        player.bulletSpeed += 5; 
    } else {
        alert('Vous n\'avez pas assez d\'argent!');
    }
}