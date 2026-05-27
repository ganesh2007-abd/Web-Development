const section = document.querySelector('section')
const p = document.querySelector('p')
const btn = document.querySelector('button')

btn.addEventListener('click', function (e) {
    e.stopPropagation()
    console.log("only one thing !!")
})
