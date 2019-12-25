import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1577140021400 implements MigrationInterface {
    name = 'Test1577140021400'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `post` CHANGE `views` `views` int NOT NULL DEFAULT 1", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `post` CHANGE `views` `views` int NOT NULL", undefined);
    }

}
