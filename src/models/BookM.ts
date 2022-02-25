import { Schema, model } from 'mongoose'

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


export default model('Book', BookSchema)