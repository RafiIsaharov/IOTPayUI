import { ITEMS } from './mock-devices';
import {Injectable} from "@angular/core";
import { DevicePage } from '../pages/device/device';

@Injectable()
export class DeviceService {
  private items: any;
  

  constructor() {
    this.items = ITEMS;
  }

  getAll(deviceIds?: any) {

    if (deviceIds) {
      let devices : any[] = [];
        for (let deviceId of deviceIds) {
          devices.push(this.getItem(deviceId));
        }
        return devices;
    } else 
    return this.items;
  }

  getItem(id){
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === parseInt(id)) {
        return this.items[i];
      }
    }
    return null;
  }

  addDevice(item : any) {
   //alert("Adding Device");
   this.items.push(item); 
   console.log(this.items);
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
