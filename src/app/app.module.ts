import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BasePage} from "../pages/base/base";
import {CivilPage} from "../pages/civil/civil";
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
import {SendmoneyPage} from "../pages/sendmoney/sendmoney";
import {GetmoneyPage} from "../pages/getmoney/getmoney";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BasePage,
    CivilPage,
    CourtsPage,
    HospitalPage,
    InsuranceBrokerPage,
    InvestPage,
    MobilemoneyPage,
    PhoneBalancePage,
    RevenueAuthorityPage,
    SavingsPage,
    SsfPage,
    SupermarketPage,
    SendmoneyPage,
    GetmoneyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      BasePage,
      CivilPage,
      CourtsPage,
      HospitalPage,
      InsuranceBrokerPage,
      InvestPage,
      MobilemoneyPage,
      PhoneBalancePage,
      RevenueAuthorityPage,
      SavingsPage,
      SsfPage,
      SupermarketPage,
      SendmoneyPage,
      GetmoneyPage
  ],
  providers: []
})
export class AppModule {}
