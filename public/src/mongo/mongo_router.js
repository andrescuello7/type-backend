"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_controller_1 = require("./mongo_controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
const controller = new mongo_controller_1.mongoController();
router.get('/', controller.getMongo);
router.post('/', controller.postMongo);
router.put('/:id', controller.putMongo);
router.delete('/:id', controller.deleteMongo);
exports.default = router;
//# sourceMappingURL=mongo_router.js.map