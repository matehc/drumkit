window.addEventListener('keydown', playSound);

function playSound(e) {
    console.log(e);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audioElement) return;
    audioElement.currentTime = 0;
    audioElement.play();
    console.log(key);
    key.classList.add('playing');
}



function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== "transform") return;

    this.classList.remove("playing");
    // key.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));