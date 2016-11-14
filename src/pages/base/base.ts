import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CivilPage} from "../civil/civil";
import {CourtsPage} from "../pages/courts/courts";
import {HospitalPage} from "../pages/hospital/hospital";
import {InsuranceBrokerPage} from "../pages/insurance-broker/insurance-broker";
import {InvestPage} from "../pages/invest/invest";
import {MobilemoneyPage} from "../pages/mobilemoney/mobilemoney";
import {PhoneBalancePage} from "../pages/phone-balance/phone-balance";
import {RevenueAuthorityPage} from "../pages/revenue-authority/revenue-authority";
import {SavingsPage} from "../pages/savings/savings";
import {SsfPage} from "../pages/ssf/ssf";
import {SupermarketPage} from "../pages/supermarket/supermarket";

/*
  Generated class for the Base page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BasePage Page');
  }

  goToCivil(){
    this.navCtrl.push(CivilPage);
  }

  goToCourtsPage(){
    this.navCtrl.push(CourtsPage);
  }
  goToHospitalPage(){
    this.navCtrl.push(HospitalPage);
  }
  goToInsuranceBrokerPage(){
    this.navCtrl.push(InsuranceBrokerPage);
  }
  goToInvestPage(){
    this.navCtrl.push(InvestPage);
  }
  goToMobilemoneyPage(){
    this.navCtrl.push(MobilemoneyPage);
  }
  goToPhoneBalancePage(){
    this.navCtrl.push(PhoneBalancePage);
  }
  goToRevenueAuthorityPage(){
    this.navCtrl.push(RevenueAuthorityPage);
  }
  goToSavingsPage(){
    this.navCtrl.push(SavingsPage);
  }
  goToSsfPage(){
    this.navCtrl.push(SsfPage);
  }
  goToSupermarketPag(){
    this.navCtrl.push(SupermarketPage);
  }
}
