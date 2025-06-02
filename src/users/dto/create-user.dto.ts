import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator"

export class CreateuserDto {


    @IsEmail()
    @IsString()
    @IsNotEmpty() 
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsNumber()
    @Max(100)
    age: number
}