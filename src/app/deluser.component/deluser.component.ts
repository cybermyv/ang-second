import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from './../user';

@Component({
    selector: 'user-del',
    templateUrl: './deluser.component.html',
    styleUrls: ['./deluser.component.css']
})

export class DelUserComponent {
    @Input() user: User;
    @Input() closable = true;
    @Input() visible: boolean;

    @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() delete: EventEmitter<User> = new EventEmitter();

    constructor() { };

    delUser() {
        //console.log('Удаляю -', this.user);
        this.delete.emit(this.user);
        this.closeModal();
    }

    closeModal() {
        this.visible = false;
        this.visibleCange.emit(this.visible);

    };
}