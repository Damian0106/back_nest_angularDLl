import { ObjetoPerdido } from "../../objeto-perdido/entities/objeto-perdido.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ObjetoEncontrado {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar', length:250})
    nombre!:string;

    @Column({type:'varchar', length:250})
    lugar!:string;

    @Column({type:'int', default:1})
    cantidad!:number;

    @Column({type:'varchar', length:250, nullable:true})
    imagen!:string;

    @Column({type:'text', nullable:true})
    descripcion!:string;

    @Column({type:'varchar', length:50, default:'ENCONTRADO'})
    estado!:string;

    @ManyToOne(()=>ObjetoPerdido, (obj)=>obj.objetosEncontrados)
    objetoPerdido!:ObjetoPerdido;
}
