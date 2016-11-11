import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {BasePage} from "../base/base";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(BasePage);
  }
}
