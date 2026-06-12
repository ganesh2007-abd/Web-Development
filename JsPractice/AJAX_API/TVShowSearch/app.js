const btn = document.querySelector("#btn")
const form = document.querySelector("#from")
const gallery = document.querySelector(".container")

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    gallery.innerHTML = ""
    const show = form.elements.input.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`)
    const shows = res.data
    // console.log(shows)
    for (let res of shows) {
        if (res.show.image) {
            const source = res.show.image.medium
            const ele = document.createElement("IMG")
            ele.src = source
            gallery.append(ele)
        }
    }
    form.elements.input.value = ""


})