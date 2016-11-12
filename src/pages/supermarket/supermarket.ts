import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Supermarket page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-supermarket',
  templateUrl: 'supermarket.html'
})
export class SupermarketPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SupermarketPage Page');
  }

}
