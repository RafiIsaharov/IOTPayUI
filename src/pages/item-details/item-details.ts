import { DeviceService } from '../../services/device-service';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDevicesService } from '../../services/mock-user-devices-service';
import { UserService } from '../../services/user-service';

/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
 
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  item;
  user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, 
    public deviceSrv : DeviceService,
    public userDeviceService: UserDevicesService,
    public userService : UserService) {
    this.item = navParams.get('item');
    this.user = navParams.get('user');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
  }

  cancel(){
      this.viewCtrl.dismiss();
  }

  done(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss();
  }

  delete(){
   // this.deviceSrv.remove(this.item);  
    console.log ("delete was pressed");
    this.userDeviceService.removeDeviceFromUser(this.user, this.item.id);
    this.viewCtrl.dismiss();
    
  }

}
