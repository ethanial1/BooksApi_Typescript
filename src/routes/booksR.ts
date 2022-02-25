import { Request, Response, Router } from "express";

class BookRoutes {
    router: Router

    constructor() {
        this.router = Router()
        this.rutas()
    }

    
    getBooks (req: Request, res: Response) {
        res.send('libros')
    }
    
    getBook () {
        
    }

    saveBook () {}
    
    updateBook () {}
    
    deleteBook () {}
    
    rutas() {
        this.router.get('/all', this.getBooks)
        this.router.get('/one/:idbook', this.getBook)
        this.router.post('/saveone', this.saveBook)
        this.router.put('/updateone/', this.updateBook)
        this.router.delete('/del/:idbook', this.deleteBook)
    }
}


const bookRoutes = new BookRoutes()
bookRoutes.rutas()

export default bookRoutes.router