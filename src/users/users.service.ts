import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    private users = [
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
}
