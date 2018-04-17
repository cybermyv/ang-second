import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from "./../user";

@Component({
  selector: "user-add",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"]
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  newUser: User = new User();

  @Input() visible: boolean;
  @Input() closable = true;
  @Output() visibleCange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() add: EventEmitter<User> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addUserForm = this.fb.group({
      login: ["", [Validators.required, Validators.pattern(/[А-я]/)]],
      pass: [""],
      comment: [""]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.addUserForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  closeModal() {
    this.visible = false;
    this.visibleCange.emit(this.visible);
  }

  saveForm(formValues: any) {
    const controls = this.addUserForm.controls;
    if (this.addUserForm.invalid) {
        Object.keys(controls).forEach(controlName=>controls[controlName].markAsTouched());
        return
    }

    this.newUser = this.addUserForm.value;
    this.add.emit(this.newUser);
    this.addUserForm.reset();
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
