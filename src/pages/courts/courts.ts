import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Courts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-courts',
  templateUrl: 'courts.html'
})
export class CourtsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CourtsPage Page');
  }

}
