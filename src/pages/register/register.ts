import {Component,OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit{
  signinup: FormGroup;
  userData:{userName:String,password:String};
  
  constructor(public nav: NavController) {
  }

  ngOnInit(){
    this.signinup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), 
      Validators.minLength(4), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), 
      //Validators.minLength(4), Validators.maxLength(30)]),
      //email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });

  }

  // register and go to home page
  register() {

    this.nav.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
