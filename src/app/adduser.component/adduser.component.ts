import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './../user';
import { UserService } from "./../user.service";

@Component({
    selector: 'user-add',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
})

export class AddUserComponent {
    newUser = new User();
    constructor(private userService: UserService, private router: Router,  private location: Location) { };

    add() {
        this.userService
            .addUser(this.newUser)
            .subscribe()
            
            
          
    };

    closeModal() {
        this.location.back();
        this.router.navigate([{ outlets: { userPopup: null } }]);
    };
}