import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../user';
import { UserService } from "./../user.service";

@Component({
    selector: 'user-add',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
})

export class AddUserComponent {
    users: User[] = [];
    newUser = new User();

    constructor(private userService: UserService, private router: Router) { };

    add(user) {
        console.log('newUser', this.newUser);


        this.userService
            .addUser(user)
            .subscribe((newUser) => { this.users = this.users.concat(newUser) });

    };

    closeModal() {
        this.router.navigate([{ outlets: { userPopup: null } }]);
    };
}