import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsPage {
  constructor(public viewCtrl: ViewController, private http: HttpClient) {}

  close() {
    this.viewCtrl.dismiss();
  }

  fetchData () {
    return new Promise(resolve => {
    this.http.get(`http://www.google.com`).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
    });
  }

  showData () {
    
  }
}