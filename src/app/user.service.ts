import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ApiService } from "./api.service";
import { User } from "./user";

@Injectable()
export class UserService {
  
    private userSource : BehaviorSubject<User[]>;
    
     

  

  constructor(private api: ApiService) {
    this.userSource = <BehaviorSubject<User[]>> new BehaviorSubject([]);
    
    
  }
  
changeUsers(users){
   
   this.userSource.next(users);
    // this.userSource.asObservable();
    console.log('changeUsers service',this.userSource.asObservable());
    return  this.userSource.getValue();
}

  getUsers(): Observable<User[]> {
    return this.api.getUsers()
  }

// getUsers(){
//     return this.userSource.asObservable();
// }

  getUserById(id): Observable<User> {
    return this.api.getUsersByID(id);
  }

  addUser(user: User): Observable<User> {
    return this.api.createUser(user);
  }

  deleteUser(userId: number): Observable<User> {
    return this.api.deleteUser(userId);
  }

  updateUser(user: User): Observable<User> {
    return this.api.updateUser(user);
  }
}
