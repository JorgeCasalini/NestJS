import { Injectable } from '@nestjs/common';
import { CreateuserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    
    private users: any[] = [
        {
            id: 1,
            name: 'John Doe',
            phone: '12345'
        },
        {
            id: 2,
            name: 'Jane Doe',
            phone: '1245'
        }
    ]
    
    getUSers ()  {
        return  this.users;
    }

    createUser(user: CreateuserDto) {
        this.users.push(user);
        
        return {
            ...user,
            id: this.users.length + 1
        };
    }
}
