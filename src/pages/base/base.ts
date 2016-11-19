import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CivilPage} from "../civil/civil";
import {CourtsPage} from "../courts/courts";
import {HospitalPage} from "../hospital/hospital";
import {InsuranceBrokerPage} from "../insurance-broker/insurance-broker";
import {InvestPage} from "../invest/invest";
import {MobilemoneyPage} from "../mobilemoney/mobilemoney";
import {PhoneBalancePage} from "../phone-balance/phone-balance";
import {RevenueAuthorityPage} from "../revenue-authority/revenue-authority";
import {SavingsPage} from "../savings/savings";
import {SsfPage} from "../ssf/ssf";
import {SupermarketPage} from "../supermarket/supermarket";

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

  goToCivilPage(){
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
  goToSavingsAccountPage(){
    this.navCtrl.push(SavingsPage);
  }
  goToSsfPage(){
    this.navCtrl.push(SsfPage);
  }
  goToSupermarketPage(){
    this.navCtrl.push(SupermarketPage);
  }
  goToSavingsAccountPage(){

  }
  goToSupermarketPage(){

  }
}
