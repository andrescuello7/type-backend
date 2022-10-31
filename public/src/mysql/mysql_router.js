"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_controller_1 = require("./mysql_controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
const controller = new mysql_controller_1.mysqlController();
router.get('/', controller.getMysql);
router.post('/', controller.postMysql);
router.put('/:id', controller.putMysql);
router.delete('/:id', controller.deleteMysql);
exports.default = router;
//# sourceMappingURL=mysql_router.js.map