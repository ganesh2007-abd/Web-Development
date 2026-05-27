const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//     console.log("Eventlistener")
// })

function one() {
    console.log("one")
}

function two() {
    console.log("two")
}

btn.addEventListener('click', one, { once: true })
btn.addEventListener('click', two)