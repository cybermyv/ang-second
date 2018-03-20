import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../user';
import { UserService } from "./../user.service";


@Component({
    selector: 'user-list',
    exportAs: 'userCmp',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {


    users: User[] = [];
    selectedUser: User;

    constructor(private userService: UserService, private router: Router) { };

    public ngOnInit() {
        this.onGetUser();
    }

    onGetUser() {
        this.userService
            .getUsers()
            .subscribe(users => {
                this.users = users
            });
    };

    onAddUser(user) {
        this.userService
            .addUser(user)
            .subscribe(() => this.ngOnInit())
    };

    onRemoveUser(user) {
        this.userService
            .deleteUser(user.id)
            .subscribe(() => this.ngOnInit())
    };

    onUpdateUser(user) {
        this.userService
            .updateUser(user)
            .subscribe(
            //    () => this.ngOnInit()
            
            )
    }


    private onSelect(user: User) {
        this.selectedUser = user;
        //  console.log('selected', this.selectedUser);

    };
}
