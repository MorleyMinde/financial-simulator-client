import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Sendmoney page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sendmoney',
  templateUrl: 'sendmoney.html'
})
export class SendmoneyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SendmoneyPage Page');
  }

}
