import { MigrationInterface, QueryRunner } from "typeorm";

export class TableObjetoPerdido1794579003427 implements MigrationInterface {
    name = 'TableObjetoPerdido1794579003427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "objeto_perdido" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying, CONSTRAINT "PK_273a26453f424b2250ea7f0e998" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "objeto_perdido"`);
    }

}
