import { Module } from '@nestjs/common';
import { ObjetoPerdidoService } from './objeto-perdido.service';
import { ObjetoPerdidoController } from './objeto-perdido.controller';
import { DatabaseModule } from '../../database/database.module';
import { objetoPerdidoProviders } from './objeto-perdido.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ObjetoPerdidoController],
  providers: [...objetoPerdidoProviders, ObjetoPerdidoService],
})
export class ObjetoPerdidoModule {}
