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

  createNewUser(user) {
    let newUser = {userName:user.username,
      accNumber: '324235232',
      loanOffer: user.loanOffer?user.loanOffer:false,
      phone:user.phone? user.phone:"111",
      email:user.email?user.email:user.username+"@gmail.com",
      finastraId: '1223-2312'
        } 
    this.addUser(newUser);
    this.setCurrentUser(newUser);
    this.userDevicesService.createNewUserWithNoDevices(typeof user == "string"? user:newUser.userName);
  }

  //get and set current user.
  getUser(userName){
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName) {
        this.setCurrentUser(this.users[i]);
        return this.users[i];
      }
    }
    return null;
  }

  setCurrentUser(user) {
    console.log("setCurrentUser" + JSON.stringify(user));
    this.currentUser = user;
  }
  getCurrentUser () {
    return this.currentUser;
  }

  addUser(user : any) {
   this.users.push(user); 
   console.log(this.users);
  }


}
