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
    console.log(event.code);  
    if (keys.hasOwnProperty(event.code)) {
        keys[event.code] = true;
        if (event.code === 'Space') {  
            console.log('Space key pressed');
            shoot();
        }
        if (event.code === 'KeyP') togglePause();  
        if (event.code === 'KeyB') toggleShop();  
    }
});




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
    }
};

