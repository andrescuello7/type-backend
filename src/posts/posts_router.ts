import { postsController } from './posts_controller';
        import { Router } from 'express';
        
        const router: Router = Router();
        const controller = new postsController();
        
        router.get('/', controller.getPosts);
        router.post('/', controller.postPosts);
        router.put('/:idPost', controller.putPosts);
        router.delete('/:idPost', controller.deletePosts);
        
        export default router;