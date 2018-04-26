//import { Observable } from 'rxjs/Observable';
import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

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

  getData(): Observable<Object>{
    let apiURL = "https://jsonplaceholder.typicode.com/posts/1";
    return this.http.get(apiURL);
  }
  showData() {
    this.getData().subscribe((data)=>{
      console.log("This is a result" + JSON.stringify(data));
    });
  }
}