import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SendmoneyPage} from "../sendmoney/sendmoney";
import {GetmoneyPage} from "../getmoney/getmoney";

/*
  Generated class for the PhoneBalance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-balance',
  templateUrl: 'phone-balance.html'
})
export class PhoneBalancePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PhoneBalancePage Page');
  }
  goToSendmoneyPage(){
    this.navCtrl.push(SendmoneyPage);
  }
  goToGetmoneyPage(){
    this.navCtrl.push(GetmoneyPage);
  }
}
