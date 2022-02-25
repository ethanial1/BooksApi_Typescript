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
    
    async getBook (req: Request, res: Response) {
        try {
            const idBook = req.params.idbook;
            const book = await BookM.findById(idBook);

            if(book) return res.json(book)

            res.status(404).json({msg: "Libro no encontrado. El id no pertenece a ningun libro."})
        } catch (error) {
            res.status(500).json({msg: "Error al buscar el libro, verificar el id ingresado", error})
        }
    }

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