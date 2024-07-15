import { Schema, model, Model } from 'mongoose'

const generationSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: true
    },
    script: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    chat_id: {
        type: String,
        required: true
    }
})

let Generation: Model<any>

try {
    Generation = model('Generation')
} catch (error) {
    Generation = model('Generation', generationSchema)
}

export const getGenerationModel = () => Generation
