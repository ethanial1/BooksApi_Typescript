import express from "express";
import morgan from 'morgan'
import helmet from "helmet";
import mongoose from "mongoose";

import booksRutas from "./routes/booksR";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config() {
        // mongoose
        const MONGO_URI = 'mongodb://localhost/booksapi';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL).then(db => console.log("Base de datos conectada"))

        // settings
        this.app.set('port', process.env.PORT || 3001)

        // middlewares
        this.app.use(morgan('dev'))
        this.app.use(helmet())
    }

    routes() {
        this.app.use(booksRutas)
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server listening on port",this.app.get('port'))
        })
    }
}


const server = new Server()
server.start();