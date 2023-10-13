let gamePaused = false;

export function togglePause() {
    gamePaused = !gamePaused;
}

export function isGamePaused() {
    return gamePaused;
}
