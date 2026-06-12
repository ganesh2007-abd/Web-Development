axios
    .get("https://www.swapi.tech/api/people/31")
    .then(res => {
        console.log(res.data.result.properties.name)
    })
    .catch(e => {
        console.log(e)
    })

//using async

const loadstarwars = async function (id) {
    let res = await axios.get(`https://www.swapi.tech/api/people/${id}`)
    console.log(res.data.result.properties.name)
}