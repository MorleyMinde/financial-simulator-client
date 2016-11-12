import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Invest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-invest',
  templateUrl: 'invest.html'
})
export class InvestPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InvestPage Page');
  }

}
