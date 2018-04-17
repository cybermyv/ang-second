import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import { User } from "./../user";
import { UserService } from "./../user.service";

import 'rxjs/operators/map';

@Component({
  selector: "user-edit-r",
  templateUrl: "./editroute.component.html",
  styleUrls: ["./editroute.component.css"]
})
export class EditRouteComponent implements OnInit {
  
    public user: User;
  
    constructor(
        private router:Router,
        private route:ActivatedRoute,
        private userService: UserService
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id'), 10);
      console.log(id);

      this.userService.getUsers()
        .map((users: User[]) => {
            console.log(users, typeof id);
            return users.find(user => user.id === id);
        })
        .subscribe((user: User) => {
            this.user = user;
            console.log(user);
        });

    });
  }
}
