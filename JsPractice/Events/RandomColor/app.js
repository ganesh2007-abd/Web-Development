const btn = document.querySelector('button')
function rand() {
    return Math.floor(Math.random() * 256)
}

btn.onclick = () => {
    const r = rand()
    const g = rand()
    const b = rand()
    const color = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = color
}