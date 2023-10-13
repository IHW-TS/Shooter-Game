let allies = [];

export function buyAlly(player, price) {
    if (player.money >= price) {
        player.money -= price;
        allies.push({
            x: player.x - 60,
            y: player.y,
            width: 50,
            height: 50,
        });
    } else {
        alert('Vous n\'avez pas assez d\'argent!');
    }
}

export function drawAllies(ctx) {
    ctx.fillStyle = 'purple';
    allies.forEach(ally => {
        ctx.fillRect(ally.x, ally.y, ally.width, ally.height);
    });
}
