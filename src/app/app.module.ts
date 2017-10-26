import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
