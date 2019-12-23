import { Router } from 'express';
import PostsController from "../controllers/PostsController";
import JwtMiddleware from '../middlewares/JwtMiddleware';

const router = Router();

router.get('/', PostsController.getPosts)
router.get('/:path', PostsController.getPostByPath)
router.post('/', [JwtMiddleware.checkJwt], PostsController.savePost)
router.put('/:post', [JwtMiddleware.checkJwt], PostsController.updatePost)
router.delete('/:id', [JwtMiddleware.checkJwt], PostsController.updatePost)

export default router;