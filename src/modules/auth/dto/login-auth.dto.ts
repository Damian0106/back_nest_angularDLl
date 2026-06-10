import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { User } from "../interfaces/user.interface"; 

export class LoginAuthDto implements User{
    name?: string | undefined;
    @IsEmail()
    @IsNotEmpty()
    email!: string;
    @MinLength(6)
    @MaxLength(10)
    @IsNotEmpty()
    password!: string;
}