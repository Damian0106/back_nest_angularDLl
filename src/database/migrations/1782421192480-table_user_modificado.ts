import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUserModificado1782421192480 implements MigrationInterface {
    name = 'TableUserModificado1782421192480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
