import 'reflect-metadata';
import * as jwt from 'jsonwebtoken';

import { Service } from 'typedi';
import { User } from '../entity/User';

@Service()
export default class JwtService {
  private jwtSecret = process.env.JWT_SECRET || 'test';

  createToken(user: User) {
    return jwt.sign({ userId: user.id, username: user.username },
      this.jwtSecret, { expiresIn: '24h' }
    )
  }

  checkJwtToken(token: string) {
    try {
      return jwt.verify(token, this.jwtSecret);
    } catch (error) {
      throw error;
    }
  }
}