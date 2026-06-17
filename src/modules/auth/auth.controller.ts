import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';
//aqui estamos creando una ruta -> Http: localhots/auth/regular
// @Body es una peticion 
@Controller('auth')
export class AuthController {
    // constructor permite llamar a todo el service que tengamos
    constructor(private authService:AuthService){

    }
    @Post ('register')
    registerUser(@Body()userObj: RegisterAuthDto){
        console.log(userObj);
        return userObj;
     
    }
    @Post('login')
    login(@Body()credenciales: LoginAuthDto){
        //el "this" llama a las variables del constructor
        return this.authService.login(credenciales)
        
    }
}
