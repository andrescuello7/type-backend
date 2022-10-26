import { mysqlController } from './mysql_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new mysqlController();
        
        router.get('/', controller.getMysql);
        router.post('/', controller.postMysql);
        router.put('/:idPost', controller.putMysql);
        router.delete('/:idPost', controller.deleteMysql);
        
        export default router;