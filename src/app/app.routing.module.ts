import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './user.component/user.component';
import {AddUserComponent} from './adduser.component/adduser.component'

const routes : Routes=[
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'add-user',
        component: AddUserComponent,
        outlet: 'userPopup'
    },
    {
        path:'',
        redirectTo:'/users',
        pathMatch:'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }