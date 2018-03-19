import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from './../user';

@Component({
    selector: 'user-edit',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.css']
})

export class UpdUserComponent {
    @Input() user: User;
    @Input() closable = true;
    @Input() visible: boolean;

    @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() edit: EventEmitter<User> = new EventEmitter();

    constructor() { };

    editUser() {
        
        this.edit.emit(this.user);
        this.closeModal();
    }

    closeModal() {
        this.visible = false;
        this.visibleCange.emit(this.visible);

    };
}