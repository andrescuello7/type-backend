import { Schema, model } from 'mongoose';

const mongoModel = new Schema({
    title: {
        type: String,
        required: true,
        tim: true
    },
    description: {
        type: String,
        tim: true
    },
    image: {
        type: String,
        tim: true
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

export default model('mongoModel', mongoModel);