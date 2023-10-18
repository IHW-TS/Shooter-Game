// Dans shop.js
function openShop() {
    togglePause();
    // Logique d'ouverture de la boutique
}

// Dans player.js
window.addEventListener('keydown', function(event) {
    switch(event.key) {
        // ...
        case 'b':
            openShop();
            break;
        // ...
    }
});
