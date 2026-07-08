import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RegisterAuthDto } from './dto/login-auth.dto';
import { LoginAuthDto } from './dto/register-auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){

    }
    @Post('/register')
    registerUser(@Body()userObject: RegisterAuthDto){
        console.log(userObject);
        return userObject;
        //userObject.name;
        //userObject.email;
        //userObject.password;
    }

    @Post('/login')
    login(@Body()credenciales: LoginAuthDto){
        //this.authService.login(credenciales)
        return this.authService.login(credenciales);
    }
}
