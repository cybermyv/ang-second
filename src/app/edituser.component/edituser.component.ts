import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from './../user';

@Component({
    selector: 'user-edit',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.css']
})

export class UpdUserComponent {
   // updatedUser:User;

    @Input() updatedUser: User;
    @Input() closable = true;
    @Input() visible: boolean;

    @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() edit: EventEmitter<User> = new EventEmitter();

    constructor() {};

    
    editUser() {
      //  console.log('editUser', this.updatedUser);
        // this.updatedUser = this.user;
        this.edit.emit(this.updatedUser);
        this.closeModal();
    }

    closeModal() {
        this.visible = false;
        this.visibleCange.emit(this.visible);

    };
}