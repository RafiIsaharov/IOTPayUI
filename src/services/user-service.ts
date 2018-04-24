import { USERS } from './mock-users';
import {Injectable} from "@angular/core";
import { UserDevicesService } from './mock-user-devices-service';

@Injectable()
export class UserService {
  private users: any;
  

  constructor(public userDevicesService: UserDevicesService) {
    this.users = USERS;
  }

  createNewUser (userName) {
    this.addUser(userName);
    this.userDevicesService.createNewUserWithNoDevices(userName);
  }


  getUser(userName){
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName) {
        return this.users[i];
      }
    }
    return null;
  }

  addUser(user : any) {
   //alert("Adding Device");
   this.users.push(user); 
   console.log(this.users);
  }


}
