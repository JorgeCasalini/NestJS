import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateuserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/users')
    getUsers() {
        return this.usersService.getUSers()
    }

    @Post('/users') 
   
    createUser(@Body() user:CreateuserDto){
        return this.usersService.createUser(user);
    }
    
}
