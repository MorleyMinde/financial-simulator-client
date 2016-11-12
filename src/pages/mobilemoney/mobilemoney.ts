import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Mobilemoney page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mobilemoney',
  templateUrl: 'mobilemoney.html'
})
export class MobilemoneyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MobilemoneyPage Page');
  }

}
