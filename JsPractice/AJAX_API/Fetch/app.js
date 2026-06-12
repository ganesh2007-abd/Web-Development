fetch("https://www.swapi.tech/api/people/1")
    .then((res) => {
        // console.log("Resolved")
        return res.json()
    })
    .then((data) => {
        console.log(data.result.properties.name)
        return fetch("https://www.swapi.tech/api/people/2")
    })
    .then((res) => {
        // console.log("Resolved")
        return res.json()
    })
    .then((data) => {
        console.log(data.result.properties.name)

    })
    .catch((e) => {
        console.log(e)
    })


//using Async Functions

const loadstarwars = async function () {
    try {
        let res = await fetch("https://www.swapi.tech/api/people/31")
        let data = await res.json()
        console.log(data.result.properties.name)
        let res2 = await fetch("https://www.swapi.tech/api/people/32")
        let data2 = await res2.json()
        console.log(data2.result.properties.name)
    }
    catch (e) {
        console.log(e)
    }
}