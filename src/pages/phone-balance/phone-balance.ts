import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

}
