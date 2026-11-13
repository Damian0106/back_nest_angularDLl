import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ObjetoPerdido {
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    nombre!:string;
    @Column({nullable:true})
    detalle!:string;
}
