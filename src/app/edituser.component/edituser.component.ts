import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from './../user';

@Component({
    selector: 'user-edit',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.css']
})

export class UpdUserComponent implements OnInit{
   editUserForm: FormGroup;

    @Input() updatedUser: User;
    @Input() closable = true;
    @Input() visible: boolean;

    @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() edit: EventEmitter<User> = new EventEmitter();
    

    constructor(private fb: FormBuilder) {}

    ngOnInit() {

       
     this.initForm();
    }

    initForm() {

        this.editUserForm = this.fb.group({
          login: ["1"],
          pass: ["2"],
          comment: ["3"]
        });
      }
    
    editUser() {
        this.edit.emit(this.updatedUser);
        this.closeModal();
    }

    closeModal() {
        this.visible = false;
        this.visibleCange.emit(this.visible);

    };
}