import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SendmoneyPage} from "../sendmoney/sendmoney";
import {GetmoneyPage} from "../getmoney/getmoney";

/*
  Generated class for the Savings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-savings',
  templateUrl: 'savings.html'
})
export class SavingsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SavingsPage Page');
  }

  goToSendmoneyPage(){
    this.navCtrl.push(SendmoneyPage);
  }
  goToGetmoneyPage(){
    this.navCtrl.push(GetmoneyPage);
  }
}
