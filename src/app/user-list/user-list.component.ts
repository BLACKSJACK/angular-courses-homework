import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public selectedUser;
  public users;
  public newUser={
      name:"",
      color:"",
      sex:1,
      birthday:"",
      clean(){
          this.name="";
          this.color="";
          this.sex=1;
          this.birthday="";
      }

  };
  public addNewUser(){

      if(this.newUser.name!=="" &&
          this.newUser.color!=="" &&
          (+this.newUser.sex===1 || this.newUser.sex===0) &&
          this.newUser.birthday!==""){
          this.newUser.sex=+this.newUser.sex;
          this._userService.add(this.newUser);
          this.newUser.clean();
      }

  }
  public deleteUser(user){
    this.users.splice(this.users.indexOf(user),1);
  }




  constructor(private _userService: UserService,
  private _http: HttpClientModule) {

  }

  ngOnInit() {
    this.users = this._userService.getAll();
  }

}
