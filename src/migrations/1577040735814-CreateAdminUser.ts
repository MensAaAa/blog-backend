import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from "../entity/User";

export class CreateAdminUser1577040735814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const user = new User();
        user.username = 'mensur';
        user.password = 'Metallica';
        user.hashPassword();
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
