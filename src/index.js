const $video = document.getElementById("video")
const $play = document.getElementById("play")
const $pausa = document.getElementById("pausa")
const $next = document.getElementById("next")

$play.addEventListener('click', handlePlay)
$pausa.addEventListener('click', handlePause)
$next.addEventListener('click', handleNext)
$video.addEventListener('loadedmetadata', handleLoaded )
$video.addEventListener('timeupdate', handleTimeUpdate )

let n = 0
if (n > 52) {
    n = 0
}


function handlePlay(){
    $video.play()
    console.log("Le diste al Play")
}
function handlePause(){
    $video.pause()
    console.log("le diste al pause")
}
function handleNext(){
    n = n + 1
    const musinInArray = Object.values(SONGS)    
    // 1 hasta el 52
    $video.setAttribute('src', (`./src/assets/${musinInArray[n]}.mp4`))
    $video.play()
}
function handleLoaded(){
console.log($video.duration) 
}
function handleTimeUpdate() {
    // console.log($video.currentTime)
    if ($video.duration === $video.currentTime) {
        n = n + 1
        handleNext()
    }
}


function getMusic(){
    const musinInArray = Object.values(SONGS)
}