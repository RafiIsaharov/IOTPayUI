import { UserService } from './../../services/user-service';
import {Component,OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit{
  private signUp: FormGroup;
  
  
  constructor(public nav: NavController,
     private formBuilder:FormBuilder,
    private userService:UserService) {
  }

  ngOnInit(){
    this.signUp = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), 
      Validators.minLength(4), Validators.maxLength(15)]],      
      accNumber: ['',Validators.required],
      loanOffer: [''],
      phone:[''] ,
      email:[''] ,
      password:[''],
    });

    
    

  }

  // register and go to home page
  register() {
    console.log(this.signUp.value);
    this.userService.createNewUser(this.signUp.value);
    this.nav.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
