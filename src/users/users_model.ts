import { Schema, model } from 'mongoose';

        const usersModel = new Schema({
            title: {
                type: String,
                required: true,
                tim: true
            },
            CreateAdd: {
                type: Date,
                default: Date.now()
            }
        })

        export default model('usersModel', usersModel);