import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { ApiService } from './api.service';
import { User } from './user';



@Injectable()
export class UserService {

    constructor(private api: ApiService) { }

    getUsers(): Observable<User[]> {
        return this.api.getUsers();

    }

    addUser(user: User): Observable<User> {
        return this.api.createUser(user);
    }

    deleteUser(userId: number): Observable<User> {
        return this.api.deleteUser(userId);
    }

    updateUser(user: User):Observable<User>{
        return this.api.updateUser(user);
    }

}