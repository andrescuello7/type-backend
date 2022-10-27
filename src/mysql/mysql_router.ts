import { mysqlController } from './mysql_controller';
import { Router } from 'express';

const router: Router = Router();
const controller = new mysqlController();

router.get('/', controller.getMysql);
router.post('/', controller.postMysql);
router.put('/:id', controller.putMysql);
router.delete('/:id', controller.deleteMysql);

export default router;