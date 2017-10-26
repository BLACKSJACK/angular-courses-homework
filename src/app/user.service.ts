import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    public users=[
        {
            name: "mr Orange",
            color:"orange",
            sex: 1,
            birthday: "12.01.1990"

        },
        {
            name: "mr Green",
            color:"green",
            sex: 1,
            birthday: "12.01.1990"

        },
        {
            name: "mrs White",
            color:"white",
            sex: 0,
            birthday: "12.01.1990"

        },
        {
            name: "mr Blue",
            color:"blue",
            sex: 1,
            birthday: "12.01.1990"

        },
        {
            name: "mrs Red",
            color:"red",
            sex: 0,
            birthday: "12.01.1990"

        },
        {
            name: "mrs Purple",
            color:"purple",
            sex: 0,
            birthday: "12.01.1990"

        },
        {
            name: "mr Black",
            color:"black",
            sex: 1,
            birthday: "12.01.1990"

        },
        {
            name: "mrs Yellow",
            color:"yellow",
            sex: 0,
            birthday: "12.01.1990"

        }
    ];
  constructor(private _http: HttpClient) { }
  public getAll(){
      return this.users;
  }
  public remove(user){
      this.users=this.users.filter(usr=>usr!=user);
  }
  public add(user){
      let obj={
          name:"",
          color:"",
          sex:0,
          birthday:""
      };
      for(let key in user){
          obj[key]=user[key];
      }
      console.log(obj);
      this.users.push(obj);
  }

}
