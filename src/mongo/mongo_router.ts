import { mongoController } from './mongo_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new mongoController();
        
        router.get('/', controller.getMongo);
        router.post('/', controller.postMongo);
        router.put('/:idPost', controller.putMongo);
        router.delete('/:idPost', controller.deleteMongo);
        
        export default router;