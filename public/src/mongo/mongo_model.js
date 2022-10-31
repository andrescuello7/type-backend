"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoModel = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        tim: true
    },
    description: {
        type: String,
        tim: true
    },
    image_url: {
        type: String,
        tim: true
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
});
exports.default = (0, mongoose_1.model)('mongoModel', mongoModel);
//# sourceMappingURL=mongo_model.js.map