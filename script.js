const block = document.querySelector('.block');
let lastPosition = 0;

const randomRGB = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);

    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
};


const updateAnimation = () => {
    setInterval(() => {
        let position = block.offsetLeft;
        let size = position * 0.1;

        if (position - 50 >= lastPosition || position + 50 <= lastPosition) {
            block.style.background = randomRGB();
            lastPosition = position;
        }

        block.style.width = size + 'px';
        block.style.height = size +'px';
    }, 1)
};

block.addEventListener("animationstart", updateAnimation, false);
block.addEventListener("animationiteration", () => lastPosition = 0, false);
