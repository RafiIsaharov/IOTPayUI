import { USERS } from './mock-users';
import {Injectable} from "@angular/core";
import { UserDevicesService } from './mock-user-devices-service';

@Injectable()
export class UserService {
  private users: any;
  private currentUser: any;

  constructor(public userDevicesService: UserDevicesService) {
    this.users = USERS;
  }

  createNewUser (userName) {
    this.addUser(userName);
    this.setCurrentUser(userName);
    this.userDevicesService.createNewUserWithNoDevices(userName);
  }


  getUser(userName){
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName) {
        this.setCurrentUser(userName);
        return this.users[i];
      }
    }
    return null;
  }

  setCurrentUser (userName) {
    this.currentUser = userName;
  }
  getCurrentUser () {
    return this.currentUser;
  }

  addUser(user : any) {
   //alert("Adding Device");
   this.users.push(user); 
   console.log(this.users);
  }


}
