import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component/user.component';
import { GalleryComponent } from './gallery.component/gallery.component';

const routes: Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }