// async function sing() {

// }
async function sing() {
    return "La La Land"
}
// async function sing() {
//     throw new Error("UH OH!!")
// }

sing()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


const login = async (username, password) => {
    if (!username || !password) {
        throw "Missing Credentials"
    }
    if (password === 'ganesh') {
        return "Welcome Back"
    }
    throw "Invalid password"
}

login("ganesh")
    .then((msg) => {
        console.log(msg)
    })
    .catch((e) => {
        console.log(e)
    })