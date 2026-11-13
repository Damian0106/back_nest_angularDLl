import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { ObjetoPerdidoModule } from './modules/objeto-perdido/objeto-perdido.module';
import { ObjetoEncontradoModule } from './modules/objeto-encontrado/objeto-encontrado.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, ObjetoPerdidoModule, ObjetoEncontradoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
