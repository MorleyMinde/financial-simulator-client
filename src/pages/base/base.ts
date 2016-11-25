import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,public menu: Menu,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello BasePage Page');
  }

  showPrompt(value?) {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.menu.getResponse(value).then((results) =>{
      this.present(results);
      loader.dismiss();
    })

  }
  present(results){
    let prompt = this.alertCtrl.create({
      title: results.title,
      message: results.message,
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
            this.menu.getResponse(data.choice)
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.showPrompt(data.choice);
            console.log('Send clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
