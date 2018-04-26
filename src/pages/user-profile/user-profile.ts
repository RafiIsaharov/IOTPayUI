import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user-service';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage implements OnInit{

  userData ={};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            public userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }
  ngOnInit(){
    this.userData = this.userService.getCurrentUser();
  }

}
