const path = require('path')

const getLogonJs = (req, res) => {
    console.log(path.join(__dirname + '../../../public/js/login.js'))
    res.sendFile(path.join(__dirname + '../../../public/js/login.js'))
}

module.exports = {
    getLogonJs
}