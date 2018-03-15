import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../user';
import { UserService } from "./../user.service";


@Component({
    selector: 'user-list',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    
    
    users: User[]=[];

    constructor(private userService: UserService, private router: Router) { };
    
   public ngOnInit() {
     this.userService
     .getUsers()
     .subscribe(users=>{
         this.users = users
     });

     
    }

}
