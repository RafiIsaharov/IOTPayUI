import { USER_DEVICES } from './mock-user-devices';
import {Injectable} from "@angular/core";

@Injectable()
export class UserDevicesService {
  private userDevices: any;
  

  constructor() {
    this.userDevices = USER_DEVICES;
  }


  getUserDevices(userName){
    for (var i = 0; i < this.userDevices.length; i++) {
      if (this.userDevices[i].userName === userName) {
        return this.userDevices[i].deviceId;
      }
    }
    return null;
  }

  addDeviceToUser(userName, deviceId) {
   //alert("Adding Device");
   for (var i = 0; i < this.userDevices.length; i++) {
    if (this.userDevices[i].userName === userName) {
       this.userDevices[i].deviceId.push(deviceId);

      console.log(this.userDevices);
      }
     }
  } 
}
