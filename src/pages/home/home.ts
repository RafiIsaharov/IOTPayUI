import {Component} from "@angular/core";
import {NavController, PopoverController, NavParams,ModalController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import { LoginPage } from "../login/login";
import { ItemDetailsPage } from "../item-details/item-details";


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

  items = [{
              name: 'Coffe Machine',
              desc:'provide beans',
            img:'../assets/img/iot/coffee-machine.png'},
            {
              name: 'Dush button',
              desc:'press to order somthing',
            img:'../../assets/img/iot/iotbutton.png'},];

  userName: String = this.params.get('userName');

  constructor(private storage: Storage, public nav: NavController, public params: NavParams, public popoverCtrl: PopoverController, private modelCtrl :ModalController) {
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

  selectItem(item){
    //this.nav.push(ItemDetailsPage,{item:item});
    this.modelCtrl.create(ItemDetailsPage,{item:item}).present();
  }

}

//
