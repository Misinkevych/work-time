/*stylint-disable*/
let isPlayed=false;

let playButton= document.getElementById('playBtn');

function toggle () {

let claasName = playButton.className;

console.log(claasName);


if (claasName==='pause') {
    playButton.className = 'play';
    playButton.innerHTML = 'Play';
    isPlayed = true;
} else {
    playButton.className='pause';
    playButton.innerHTML='Pause';
    isPlayed='false'
}

}