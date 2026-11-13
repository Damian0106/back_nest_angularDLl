import { DataSource } from "typeorm";
import { ObjetoPerdido } from "./entities/objeto-perdido.entity";

export const objetoPerdidoProviders=[
    {
        provide: 'OBJETO_PERDIDO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ObjetoPerdido),
        inject: ['DATABASE_CONNECTION'],
    },
]
