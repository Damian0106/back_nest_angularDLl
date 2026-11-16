import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from '../users/users.providers';

@Module({
  imports:[
    JwtModule.register({
      secret: "MI_CODIGO_SECRETO",
      signOptions:{expiresIn:'880s'}

    }),
    DatabaseModule
  ],
  controllers: [AuthController],
  providers: [...userProviders, AuthService, JwtStrategy]
})
export class AuthModule {}
