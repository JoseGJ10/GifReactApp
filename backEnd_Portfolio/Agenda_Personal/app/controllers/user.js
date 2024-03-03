const path = require('path')


function loadLoginPage(req, res) {
    res.status(200).sendFile(path.join(__dirname,'../../public/login.html'))
}


module.exports = {
    loadLoginPage
}