import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ObjetoEncontrado {
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    nombre!:string;
    @Column({nullable:true})
    imagen!:string;
    @Column()
    lugar!:string;
    @Column({default:1})
    cantidad!:number;
    @Column({default:'ENCONTRADO'})
    estado!:string;
}
