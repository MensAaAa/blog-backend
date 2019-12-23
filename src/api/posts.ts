import { Router } from 'express';
import PostsController from "../controllers/PostsController";

const router = Router();

router.get('/', PostsController.getPosts)
router.get('/:path', PostsController.getPostByPath)
router.post('/', PostsController.savePost)
router.put('/:post', PostsController.updatePost)
router.delete('/:id', PostsController.updatePost)

export default router;