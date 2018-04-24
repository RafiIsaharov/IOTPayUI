import { DeviceService } from '../../services/device-service';
import {Component} from "@angular/core";
import {NavController, PopoverController, NavParams,ModalController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import { LoginPage } from "../login/login";
import { ItemDetailsPage } from "../item-details/item-details";
import { DevicePage } from '../device/device';
import { UserDevicesService } from '../../services/mock-user-devices-service';
import { UserService } from '../../services/user-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  items: any;
 // userItems: any;
  userName: String = this.params.get('userName');
  

  constructor(private storage: Storage, public nav: NavController, public params: NavParams,
     public popoverCtrl: PopoverController, private modelCtrl :ModalController,
      public deviceService: DeviceService,
      public userDeviceService: UserDevicesService,
      public userService : UserService) {
      let userDevices = userDeviceService.getUserDevices(this.userName);
      //this.items = deviceService.getAll();
      
      
      this.items = deviceService.getAll(userDevices);
      if (this.items != null) {
        this.items = [];
      }
      //this.userItems = deviceService.getAll(userDevices);


  }



  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Device 1"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
    //**********new Addition here to load al ites on page refresh*********
    this.items = this.deviceService.getAll(this.userDeviceService.getUserDevices(this.userName));
    console.log(this.userName);
    }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }     

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  routeToDevicePage() {
    this.nav.push(DevicePage, {userName: this.userName});
  }

  selectItem(item){
    //this.nav.push(ItemDetailsPage,{item:item});
    this.modelCtrl.create(ItemDetailsPage,{item:item}).present();
  }

}

//
