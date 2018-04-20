import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';

import { User } from "./../user";
import { UserService } from "./../user.service";

import "rxjs/operators/map";

@Component({
  selector: "user-edit-r",
  templateUrl: "./editroute.component.html",
  styleUrls: ["./editroute.component.css"]
})
export class EditRouteComponent implements OnInit {
  editUsersForm: FormGroup;

  public user: User;
  users: User[];
  
  @Output() reload: EventEmitter<User[]>= new EventEmitter();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private _location: Location
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      this.userService.getUserById(id).subscribe(users => {
        console.log(users);
        this.user = users;

        this.editUsersForm = this.fb.group({
          id: [this.user.id],
          login: [this.user.login],
          pass: [this.user.pass],
          comment: [this.user.comment]
        });
      });
    });
  } // initForm

  closeModal() {
    this.router.navigate([{ outlets: { userPopup: null } }])
    // this.router.navigate([{ outlets: { userPopup: null } }])
    // .then(()=>{
    //   window.location.reload();
    // })
   
   
  
    

    // this.userService.getUsers().subscribe(
    //   users => {
    //     this.users = users;
         
    // })
    

  }

  saveForm(formValues: any) {
    this.user = formValues;

    this.userService.updateUser(this.user).subscribe(() => {
      this.userService.getUsers().subscribe((data)=>{
        this.userService.changeUsers(data)
      })
   
    });
  }

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     const id = parseInt(params.get('id'), 10);
  //     console.log(id);

  //     this.userService.getUsers()
  //       .map((users: User[]) => {
  //           console.log(users, typeof id);
  //           return users.find(user => user.id === id);
  //       })
  //       .subscribe((user: User) => {
  //           this.user = user;
  //           console.log(user);
  //       });

  //   });
  // } //ngOnInit
}
