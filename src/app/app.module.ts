import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user.service';
import { ImageService } from './image.service';
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
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, ImageService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
