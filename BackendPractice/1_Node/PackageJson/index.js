const figlet = require("figlet")
figlet("Hello World", function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
})