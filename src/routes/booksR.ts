import { Request, Response, Router } from "express";
import BookM from "../models/BookM";

class BookRoutes {
    router: Router

    constructor() {
        this.router = Router()
        this.rutas()
    }

    info (req: Request, res: Response) {
        res.json({
            rutas: {
                getAllBooks: "api/book/all",
                getOneBook: "api/book/one",
            },
            autor: "Fernando Tolentino"
        })
    }
    
    getBooks (req: Request, res: Response) {
        BookM.find()
        .then(books => res.json(books))
    }
    
    getBook (req: Request, res: Response) {}

    async saveBook (req: Request, res: Response) {
        const { titulo, autor, resumen, image } = req.body;
        const newBook = new BookM(req.body);
        await newBook.save()

        res.json(newBook)
    }
    
    updateBook (req: Request, res: Response) {}
    
    deleteBook (req: Request, res: Response) {}
    
    rutas() {
        this.router.get('/', this.info)
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