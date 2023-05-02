let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let dash = count + " - "
    saveEl.textContent += dash
    countEl.textContent = 0
    count = 0
}

function reset() {
    saveEl.innerText = "Previous entries: "
    countEl.textContent = 0
    count = 0
}