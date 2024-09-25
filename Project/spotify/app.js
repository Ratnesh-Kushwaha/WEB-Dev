
let currentSong = new Audio();
let songs; //we make songs in async fn. as global variable

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/Project/spotify/songs/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }
    return songs
}


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}




const playMusic = (track, pause = false) => {
    // let audio=new Audio("/Project/spotify/songs/" +track)
    currentSong.src = "/Project/spotify/songs/" + track
    if (!pause) {
        currentSong.play()
        play.src = "logo-Img/pause.svg"
    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00:00"
}

async function main() {

    //getting playlist of songs
    songs = await getSongs()
    playMusic(songs[0], true)


    //show all songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="logo-Img/music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                                <div>Ratnesh</div>
                            </div>
                            <div class="palynow">
                                <span>Play Now</span>
                                <img class="invert pb" src="logo-Img/play.svg" alt="">
                            </div>
        </li>`;
    }

    //attach eventListner to current song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })

    })

    // //playing first song
    // var audio = new Audio(songs[0])
    // audio.play()

    // audio.addEventListener("loadeddata", () => {
    //     let duration = audio.duration
    //     console.log(duration)
    // })

    //attach event listner to play , next, previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "logo-Img/pause.svg"
        } else {
            currentSong.pause()
            play.src = "logo-Img/play.svg"
        }

    })

    //time Update Event Listner
    currentSong.addEventListener("timeupdate", () => {
        console.log(currentSong.currentTime, currentSong.duration)
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    //adding eventListner to seekbar
    document.querySelector(".seekBar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent + "%"
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    //adding eventlistner in hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    //adding eventlistner for close icon
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    //adding eventListner for previous and next 
    previous.addEventListener("click",()=>{
        console.log("previousss")

        let index=songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index-1)>0){
            playMusic(songs[index-1])
        }
    })

    //to add volume button 
    document.querySelector(".vo")

    next.addEventListener("click",()=>{
        console.log("next")

        let index=songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index+1)<songs.length){
            playMusic(songs[index+1])
        }
    })

}

main()

