import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Getmoney page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-getmoney',
  templateUrl: 'getmoney.html'
})
export class GetmoneyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GetmoneyPage Page');
  }

}
