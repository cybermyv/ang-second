import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { ApiService } from './api.service';
import {User} from './user';



@Injectable()
export class UserService{
    
   constructor(private api:ApiService){}

    getUsers(): Observable<User[]>{
      return this.api.getUsers();

    }

    addUser(user:User):Observable<User>{
        return this.api.createUser(user);
    }

}