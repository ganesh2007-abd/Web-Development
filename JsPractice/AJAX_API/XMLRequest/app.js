const req = new XMLHttpRequest()

req.onload = function () {
    console.log("NICE")
    const data = JSON.parse(this.responseText)
    console.log(data.result.properties.name)
}

req.onerror = function () {
    console.log("BAD")
    console.log(this)
}


req.open("GET", "https://www.swapi.tech/api/people/21")
req.send()