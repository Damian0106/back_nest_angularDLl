import { Module } from '@nestjs/common';
import { ObjetoEncontradoService } from './objeto-encontrado.service';
import { ObjetoEncontradoController } from './objeto-encontrado.controller';
import { DatabaseModule } from '../../database/database.module';
import { objetoEncontradoProviders } from './objeto-encontrado.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ObjetoEncontradoController],
  providers: [...objetoEncontradoProviders, ObjetoEncontradoService],
})
export class ObjetoEncontradoModule {}
