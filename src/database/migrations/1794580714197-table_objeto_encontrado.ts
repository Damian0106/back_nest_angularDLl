import { MigrationInterface, QueryRunner } from "typeorm";

export class TableObjetoEncontrado1794580714197 implements MigrationInterface {
    name = 'TableObjetoEncontrado1794580714197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "objeto_encontrado" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "imagen" character varying, "lugar" character varying NOT NULL, "cantidad" integer NOT NULL DEFAULT '1', "estado" character varying NOT NULL DEFAULT 'ENCONTRADO', CONSTRAINT "PK_39c3fbf8105d85a5155ab23fef7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "objeto_encontrado"`);
    }

}
