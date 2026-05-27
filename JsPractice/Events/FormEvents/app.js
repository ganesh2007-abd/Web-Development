const input = document.querySelector('#tweet')
const form = document.querySelector('#forum')
const list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const t = input.value
    const newli = document.createElement("li")
    newli.innerText = t
    list.append(newli)
    input.value = ""
})