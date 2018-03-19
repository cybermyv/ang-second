import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from './../user';

@Component({
    selector: 'user-add',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
})

export class AddUserComponent {
    newUser: User = new User();

    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output() add: EventEmitter<User> = new EventEmitter();

    constructor() { };

    addUser() {
        this.add.emit(this.newUser);
        this.newUser = new User();
    }

    closeModal() {
        this.visible = false;
        this.visibleCange.emit(this.visible);

    };
}