const fs = require('fs')
const foldername = process.argv[2]
try {
    fs.mkdirSync(foldername)
    fs.writeFileSync(`${foldername}/index.html`, '')
    fs.writeFileSync(`${foldername}/app.js`, '')
    fs.writeFileSync(`${foldername}/styles.css`, '')
}
catch (e) {
    console.log(e)
}