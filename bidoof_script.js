console.log("BIDOOF WAS HERE");

let count = 0
let countEl = document.getElementById("count-el")

let saveEL = document.getElementById("save-el")

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

function touch(){
    // alert('You touched the Bidoof!');
    console.log("Button was clicked")
    count = count+1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let saveElText = count + " - "
    saveEL.textContent += saveElText

    console.log(count)

    //Reset count to 0
    countEl.textContent = 0
    count = 0
}

// Creating an Event Listener when you touch Bidoof
document.getElementById('bidoof_box').addEventListener('click', touch, save, play)
