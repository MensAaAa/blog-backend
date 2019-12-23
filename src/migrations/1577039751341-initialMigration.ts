import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1577039751341 implements MigrationInterface {
    name = 'initialMigration1577039751341'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updatedAt`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `createdAt`", undefined);
    }

}
