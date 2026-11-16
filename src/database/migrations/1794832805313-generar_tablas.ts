import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerarTablas1794832805313 implements MigrationInterface {
    name = 'GenerarTablas1794832805313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "objeto_perdido" ("id" SERIAL NOT NULL, "nombre" character varying(50) NOT NULL, "detalle" text, CONSTRAINT "PK_273a26453f424b2250ea7f0e998" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "objeto_encontrado" ("id" SERIAL NOT NULL, "nombre" character varying(250) NOT NULL, "lugar" character varying(250) NOT NULL, "cantidad" integer NOT NULL DEFAULT '1', "imagen" character varying(250), "descripcion" text, "estado" character varying(50) NOT NULL DEFAULT 'ENCONTRADO', "objetoPerdidoId" integer, CONSTRAINT "PK_39c3fbf8105d85a5155ab23fef7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(200) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "objeto_encontrado" ADD CONSTRAINT "FK_b78b6ebebd51dc2b38380862faf" FOREIGN KEY ("objetoPerdidoId") REFERENCES "objeto_perdido"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "objeto_encontrado" DROP CONSTRAINT "FK_b78b6ebebd51dc2b38380862faf"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "objeto_encontrado"`);
        await queryRunner.query(`DROP TABLE "objeto_perdido"`);
    }

}
