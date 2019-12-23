import { getRepository } from 'typeorm';
import { Service } from 'typedi';
import { User } from "../entity/User";

@Service()
export default class AuthService {
  async findUserByUsername(username: string) {
    const userRepository = getRepository(User);

    try {
      const user = await userRepository.findOneOrFail({ username });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async checkIsPasswordValid(user: User, password: string) {
    return await user.checkIfPasswordIsValid(password);
  }
}