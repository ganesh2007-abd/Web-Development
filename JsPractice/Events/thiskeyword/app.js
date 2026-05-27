const btns = document.querySelectorAll('button')

function rand() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}

function colorize() {
    const col = rand()
    console.log(col)
    this.style.backgroundColor = col
}

for (let btn of btns) {
    btn.addEventListener('click', colorize)
}