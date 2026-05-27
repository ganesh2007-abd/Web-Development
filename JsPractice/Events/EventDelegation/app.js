const input = document.querySelector('input')
const ul = document.querySelector('#list')
const btn = document.querySelector('button')

btn.addEventListener('click', function (e) {
    const inp = input.value
    const newli = document.createElement('li')
    newli.innerText = inp
    ul.append(newli)
    // e.target.remove()
})

ul.addEventListener('click', function (e) {
    e.target.remove()
})