const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    Space: false,
    p: false,
    b: false
};

window.addEventListener('keydown', event => {
    console.log(event.key);  // Ajoutez cette ligne
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = true;
        if (event.key === 'p') togglePause();
        if (event.key === 'b') toggleShop();
        if (event.key === 'Space') {
            console.log('Space key pressed');  // Ajoutez cette ligne
            shoot();
        }
    }
});

function shoot() {
    console.log('shoot function called');  // Ajoutez cette ligne
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


window.addEventListener('keyup', event => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
    }
});

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    color: 'blue',
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    move: function() {
        if (keys.ArrowUp && this.y > 0) this.y -= 10;
        if (keys.ArrowDown && this.y < canvas.height - this.height) this.y += 10;
        if (keys.ArrowLeft && this.x > 0) this.x -= 10;
        if (keys.ArrowRight && this.x < canvas.width - this.width) this.x += 10;
        if (keys.Space) shoot();
    }
};

function toggleShop() {
    isPaused = !isPaused;
}
