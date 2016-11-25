import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Menu } from '../../providers/menu';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Base page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-base',
  templateUrl: 'base.html',
  providers:[Menu]
})
export class BasePage {

  constructor(public navCtrl: NavController,public menu: Menu,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('Hello BasePage Page');
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Menu',
      message: "Menu Items",
      inputs: [
        {
          name: 'choice',
          placeholder: 'Choice'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  /*value('transactions',
    [
    { title: 'My Bank Savings', id: 1 },
    { title: 'My Phone Balance', id: 2 },
    { title: 'Invest', id: 3 },
    { title: 'Mobile Money Agent', id: 4 },
    { title: 'Social Security Fund', id: 5 },
    { title: 'Revenue Authority', id: 6 },
    { title: 'Insurance Broker', id: 7 },
    { title: 'Civil Engineers Ltd', id: 8 },
    { title: 'Hospital', id: 9 },
    { title: 'Supermarket', id: 10 },
    { title: 'Courts', id: 11 },
  ]
  )*/
}
