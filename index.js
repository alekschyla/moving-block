const COLOR_CHANGE_STEP_IN_PIXELS = 50;
const block = document.querySelector('.block');
let lastBlockPosition = 0;

function startAnimation() {
    setInterval(updateAnimation, 1)
}

function updateAnimation() {
    let currentPosition = block.offsetLeft;
    let size = currentPosition * 0.1;

    if (nextColorChangeStepReached(currentPosition)) {
        block.style.background = randomRGB();
        lastBlockPosition = currentPosition;
    }
    block.style.width = size + 'px';
    block.style.height = size + 'px';
}

function nextColorChangeStepReached(currentPosition) {
    return currentPosition - COLOR_CHANGE_STEP_IN_PIXELS >= lastBlockPosition || currentPosition + COLOR_CHANGE_STEP_IN_PIXELS <= lastBlockPosition;
}

function randomRGB () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

block.addEventListener("animationstart", startAnimation, false);
block.addEventListener("animationiteration", () => lastBlockPosition = 0, false);
