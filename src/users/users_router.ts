import { usersController } from './users_controller';
import { Router } from 'express';

const router: Router = Router();
const controller = new usersController();

router.get('/', controller.getUsers);
router.post('/', controller.postUsers);
router.put('/:idPost', controller.putUsers);
router.delete('/:idPost', controller.deleteUsers);

export default router;