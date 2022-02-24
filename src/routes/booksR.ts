import { Request, Response, Router } from "express";

class BookRoutes {
    router: Router

    constructor() {
        this.router = Router()
        this.rutas()
    }

    rutas() {
        this.router.get('/', (req, res) => res.send('hola hola'))
    }
}


const bookRoutes = new BookRoutes()
bookRoutes.rutas()

export default bookRoutes.router