import { DataSource } from "typeorm";
import { ObjetoEncontrado } from "./entities/objeto-encontrado.entity";

export const objetoEncontradoProviders=[
    {
        provide: 'OBJETO_ENCONTRADO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ObjetoEncontrado),
        inject: ['DATABASE_CONNECTION'],
    },
]
