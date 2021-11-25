class ScreenHeight{
    constructor(){
        document.body.style.height = screen.height + `px`
        if (screen.width<400) {
            document.getElementById(`logoimage`).style.width = 250 + `px`
        }
    }
}

onload = new ScreenHeight()

class AudioPlayer{
    constructor(){
        this.radio_file = document.getElementById(`radiofile`)
        this.play_pause_button = document.getElementById(`play_pause`)
        this.radio_name = document.getElementById(`songname`)
        this.go_before = document.getElementById(`gobefore`)
        this.go_after = document.getElementById(`goafter`)
        this.isplaying = false
        this.play_pause_button.addEventListener(`click`,() =>{
            this.playing()
        })
        this.raido_number = [`Unstoppable`, `داري يا قلبي`,`Keep Me True`,`يما هالبنية`,`ADDA ALKLAM`,`ما بتهون `,`The Heart Wants`,`Let Me Love You`]
        this.radio_src = [`./voice/Sia - Unstoppable (Lyrics) (192 kbps).mp3`,
        `./voice/Hamza Namira - Dari Ya Alby _ حمزة نمرة - داري يا قلبي (192 kbps).mp3`,
        `./voice/Humood Alkhudher - Keep Me True _ حمود الخضر - يحلو الوصال (192 kbps).mp3`,
        `./voice/محمد العلي - يما ها لبنية - مع صبحي محمد _ (Mohammad Ali -  Ema Ha Lbnih - Ft. Sobhi Mohammad  (2018 (192 kbps).mp3`,
        `./voice/Saad Lamjarred - ADDA ELKALAM (EXCLUSIVE Music Video) _ 2020 _ (سعد لمجرد - عدى الكلام (فيديو كليب (192 kbps).mp3`,
        `./voice/Big Sam-ما بتهون (cover) by Noel Kharman (192 kbps).mp3`,
        `./voice/Selena Gomez - The Heart Wants What It Wants (Official Video) (192 kbps).mp3`,
        `./voice/DJ Snake ft. Justin Bieber - Let Me Love You [Lyric Video] (192 kbps).mp3`]
        this.counter = 0
        
        this.go_after.addEventListener(`click`,() =>{
            this.counter++
            if (this.counter == 8) {
                this.counter = 0
            }
            localStorage.setItem(`saveradio`, this.counter)
            this.nameAndSrc()
            this.isplaying = false
            this.playing()
        })
        this.go_before.addEventListener(`click`, () => {
            this.counter -= 1
            if (this.counter == -1) {
                this.counter = 7
            }
            localStorage.setItem(`saveradio`, this.counter)
            this.nameAndSrc()
            this.isplaying = false
            this.playing()
        })
        this.nameAndSrc()
    }
    playing(){
        if (this.isplaying == false) {
            this.radio_file.play()
            this.isplaying = true
            this.play_pause_button.setAttribute(`src`, `./img/a4.png`)
        }
        else{
            this.isplaying = false
            this.play_pause_button.setAttribute(`src`, `./img/a1.png`) 
            this.radio_file.pause()
        }
    }
    nameAndSrc(){
        if (localStorage.getItem(`saveradio`) != null) {
            this.counter = localStorage.getItem(`saveradio`)
        }
        console.log(this.counter);
        this.radio_file.src = this.radio_src[this.counter]
        this.radio_name.innerHTML = this.raido_number[this.counter]
    }
}
onload = new AudioPlayer()


class VolumeControll{
    constructor(){
        this.song_file = document.getElementById(`radiofile`)
        this.song_file.volume= 50/100
        document.getElementById(`volume_range`).onchange = () =>{
            this.song_file.volume = document.getElementById(`volume_range`).value/100
        }
        document.getElementById(`speed_range`).onchange = () =>{
            this.song_file.playbackRate = document.getElementById(`speed_range`).value/100
        }
    }
}
onload = new VolumeControll()

class ColorChanger{
    constructor(){
        
        document.getElementById(`color1`).onclick = () =>{
            document.body.classList.remove(`colore2`,`colore3`,`colore4`)
            document.body.classList.add(`colore1`)
            localStorage.setItem(`savedColor`,document.body.className)
        }
        document.getElementById(`color2`).onclick = () => {
            document.body.classList.remove(`colore1`, `colore3`, `colore4`)
            document.body.classList.add(`colore2`)
            localStorage.setItem(`savedColor`, document.body.className)

            
        }
        document.getElementById(`color3`).onclick = () => {
            document.body.classList.remove(`colore1`, `colore2`, `colore4`)
            document.body.classList.add(`colore3`)
            localStorage.setItem(`savedColor`, document.body.className)

        }
        document.getElementById(`color4`).onclick = () => {
            document.body.classList.remove(`colore1`, `colore2`, `colore3`)
            document.body.classList.add(`colore4`)
            localStorage.setItem(`savedColor`, document.body.className)
        }
    }
}

onload = new ColorChanger()
onload = () => {
    document.body.classList.add(localStorage.getItem(`savedColor`))
}