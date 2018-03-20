import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user.service';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component/user.component';
import { AddUserComponent } from './adduser.component/adduser.component';
import { DelUserComponent } from './deluser.component/deluser.component';
import { UpdUserComponent } from './edituser.component/edituser.component';
import { GalleryComponent } from './gallery.component/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    DelUserComponent,
    UpdUserComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
