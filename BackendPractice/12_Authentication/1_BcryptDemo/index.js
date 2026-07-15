const bcrypt = require('bcrypt')

const hashpass = async (pw) => {
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(pw, salt)
    console.log(hash);
}

// hashpass('ganesh')

const login = async (pw) => {
    const result = await bcrypt.compare(pw, '$2b$12$ZkN4qyu2Dd3dQ9me3wACYOn9vTezdw7UTLGJCNCZYX6GCHIm3XG6.')
    if (result) {
        console.log("success!")
    }
    else {
        console.log('failed')
    }
}

login('ganesh')