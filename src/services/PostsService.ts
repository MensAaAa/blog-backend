import { Service } from 'typedi';
import { Repository, getRepository } from 'typeorm';

import { Post } from '../entity/Post';

@Service()
export default class PostsService {
  private postRepository: Repository<Post>;

  async getPosts(): Promise<Post[]> {
    this.postRepository = getRepository(Post)
    return await this.postRepository.find();
  }

  async savePost(post: any): Promise<Post> {
    this.postRepository = getRepository(Post)
    return await this.postRepository.save(post);
  }

  async getPostByPath(path: string): Promise<Post | undefined> {
    this.postRepository = getRepository(Post);
    return await this.postRepository.findOne({ path });
  }

  async deletePost(id: number) {
    this.postRepository = getRepository(Post);
    return await this.postRepository.delete({ id })
  }

  async updatePost(post: any): Promise<Post> {
    this.postRepository = getRepository(Post);
    return await this.postRepository.save(post);
  }
}