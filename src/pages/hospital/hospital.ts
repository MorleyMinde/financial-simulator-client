import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Hospital page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html'
})
export class HospitalPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HospitalPage Page');
  }

}
