import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from './../user';

@Component({
    selector: 'user-add',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
})

export class AddUserComponent implements OnInit {
    addUserForm: FormGroup;

    newUser: User = new User();
    @Input() visible: boolean;
    @Input() closable = true;
    @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() add: EventEmitter<User> = new EventEmitter();

    constructor (private fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    initForm(){
        this.addUserForm = this.fb.group({
            login: [''],
            pass:[''],
            comment: [''] 
        })
    }

    closeModal() {
                this.visible = false;
                this.visibleCange.emit(this.visible);
        
            };

    saveForm(formValues:any){
        console.log(formValues);

        this.add.emit(this.newUser);
        this.newUser = new User();
        return false;
    }        
}

// export class AddUserComponent {
//     newUser: User = new User();

//     @Input() closable = true;
//     @Input() visible: boolean;
//     @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();

//     @Output() add: EventEmitter<User> = new EventEmitter();

//     constructor() { };

//     addUser() {
//         this.add.emit(this.newUser);
//         this.newUser = new User();
//     }

//     closeModal() {
//         this.visible = false;
//         this.visibleCange.emit(this.visible);

//     };
// }