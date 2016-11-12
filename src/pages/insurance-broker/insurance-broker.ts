import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the InsuranceBroker page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-insurance-broker',
  templateUrl: 'insurance-broker.html'
})
export class InsuranceBrokerPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InsuranceBrokerPage Page');
  }

}
