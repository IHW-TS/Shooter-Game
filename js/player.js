const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    ' ': false,
    p: false,
    b: false,
    SpaceJustPressed: false
};

window.addEventListener('keydown', event => {
    console.log(event.key);  
    if (keys.hasOwnProperty(event.key) && !keys[event.key]) {  
        keys[event.key] = true;
        if (event.key === ' ') {
            keys.SpaceJustPressed = true;  
        }
        if (event.key === 'p' || event.key === 'P') { 
            togglePause();
        }
        if (event.key === 'b' || event.key === 'B') {  
            toggleShop();
        }
    }
});


window.addEventListener('keyup', event => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
        if (event.key === ' ') {
            keys.SpaceJustPressed = false;  
        }
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

