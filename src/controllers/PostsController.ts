import { Request, Response } from 'express';
import { Inject, Container } from 'typedi';

import PostsService from '../services/PostsService';

class PostsController {
  @Inject()
  private postsService: PostsService;

  savePost = async (req: Request, res: Response) => {
    try {
      const response = await this.postsService.savePost(req.body);
      res.send(response);
    } catch (error) {
      return res.sendStatus(400)
    }
  }

  getPosts = async (req: Request, res: Response) => {
    try {
      const posts = await this.postsService.getPosts();
      res.send(posts)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  getPostByPath = async (req: Request, res: Response) => {
    const path = req.params["path"];

    try {
      const post = await this.postsService.getPostByPath(path);
      res.send(post)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params["id"], 10);

    try {
      const post = await this.postsService.deletePost(id);
      res.send(post)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  updatePost = async (req: Request, res: Response) => {
    const updatedPost = req.params["post"];

    try {
      const post = await this.postsService.updatePost(updatedPost);
      res.send(post)
    } catch (error) {
      res.status(400).send(error)
    }
  }
}

export default Container.get(PostsController);