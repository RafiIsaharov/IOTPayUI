import {Component, OnInit} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {RegisterPage} from "../register/register";
import { UserService } from "../../services/user-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  signInForm: FormGroup;
  //userName: String;
  //password:String;
  
  constructor(public nav: NavController, 
    public forgotCtrl: AlertController, 
    public menu: MenuController, 
    public toastCtrl: ToastController,
    public userService : UserService ) 
    
    {
    this.menu.swipeEnable(false);
  }
  ngOnInit(){
    //let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), 
      Validators.minLength(4), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), 
      //Validators.minLength(4), Validators.maxLength(30)]),
      //email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }
  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    if (this.userService.getUser(this.signInForm.get('username').value) != null) {
    this.nav.setRoot(HomePage);
    } else {
        this.userService.createNewUser(this.signInForm.value);
        this.nav.setRoot(HomePage);

    }
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
