const express = require('express');
const path =  require('path');
const dbConnection = require('../models/index');

class Server {
    constructor() {
        this.app = express();
        this.port = 8000;

        // Routes EndPoints
        this.userRoutes = '/api/user'
        this.loginRoutes = '/api/login'

        this.getConnection();
        this.middlewares();
        this.routes();

    }

    getConnection() {
    };
    
    middlewares() {
        this.app.use('/public', express.static(path.join(__dirname + '../../public')))
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
    };

    routes() {
        this.app.use( '/', require('../routes/static'))
        this.app.use(this.userRoutes, require('../routes/user'))
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server runing on Port ${this.port}`)
        })
    };

}

module.exports = Server;