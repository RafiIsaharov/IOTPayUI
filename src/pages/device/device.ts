import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DeviceService } from '../../services/device-service';

/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  deviceData={
    name: '',
    desc: '',
    img: '../assets/img/default'
  }
  deviceId: string;
  deviceName: string;
  deviceDescription: string;
  deviceFormGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceService: DeviceService, public alertController : AlertController) {
  }

  ngOnInit() {
    this.deviceFormGroup = new FormGroup({
      deviceId: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      deviceName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      deviceDescription: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(4), Validators.maxLength(15)]),
      //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), 
      //Validators.minLength(4), Validators.maxLength(30)]),
      //email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  getDeviceDetails() : any {
    console.log (this.deviceData);
    console.log (this.deviceName);
    this.deviceData.name=this.deviceName;
    this.deviceData.desc=this.deviceDescription;
    return this.deviceData;
      
      
  }

  addDevice() {
    this.deviceService.addDevice(this.getDeviceDetails());
    this.navCtrl.pop();
  }

  fetchDevice() {
    console.log('device id is', this.deviceId);
    let item : any = this.deviceService.getItem(this.deviceId);
    console.log(item);

    if (item != null) {
      this.deviceService.addDevice(item);
      this.navCtrl.pop();
    } else {
      this.deviceDoNotExistAlert();
      //alert("Device ID doesn't exist")
    }

  }

deviceDoNotExistAlert() {
  let deviceDoNotExist = this.alertController.create({
    title: `<div> Device with ID ${this.deviceId} does not exist</div>`,  
  
    buttons: [
      {
        text: 'Ok',
        handler: data => {
          console.log('OK clicked');
        }
      },
     
    ]
  });
  deviceDoNotExist.present();
}

}
