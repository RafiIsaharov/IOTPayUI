import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.item = navParams.get('item');
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
    this.viewCtrl.dismiss();
    
  }

}
