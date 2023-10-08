let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let StageEl = document.getElementById("stage")
let fightButton = document.querySelector("#fightButton")

fightButton.addEventListener("click", function(){
    let randomEl1= Math.floor(Math.random() * fighters.length)
    let randomEl2 = Math.floor(Math.random()* fighters.length)

    StageEl.textContent = fighters[randomEl1]+ " VS "+ fighters[randomEl2]
}
)