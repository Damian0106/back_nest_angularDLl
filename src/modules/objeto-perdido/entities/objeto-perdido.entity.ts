import { ObjetoEncontrado } from "../../objeto-encontrado/entities/objeto-encontrado.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ObjetoPerdido {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type: 'varchar', length: 50})
    nombre!:string;

    @Column({type:'text', nullable:true})  //con esto permitimos que el campo sea nulo
    detalle!:string;

    @OneToMany(()=>ObjetoEncontrado, (obj)=>obj.objetoPerdido)
    objetosEncontrados!:ObjetoEncontrado[]
}
