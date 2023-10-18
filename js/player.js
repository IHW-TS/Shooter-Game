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
    move: function(x, y) {
        this.x += x;
        this.y += y;
    }
};

window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            player.move(0, -30);
            break;
        case 'ArrowDown':
            player.move(0, 30);
            break;
        case 'ArrowLeft':
            player.move(-30, 0);
            break;
        case 'ArrowRight':
            player.move(30, 0);
            break;
        case ' ':
            shoot();
            break;
        case 'p':
            togglePause();
            break;
    }
});
