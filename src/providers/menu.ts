import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Menu provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Menu{

  sequence={
    title: "Menu",
    message: "1. My Bank Savings <br />"
    +" 2. My Phone Balance <br />"
    +" 3. Invest <br />"
    +" 4. Mobile Money Agent <br />"
    +" 5. Social Security Fund <br />"
    +" 6. Revenue Authority <br />"
    +" 7. Insurance Broker <br />"
    +" 8. Civil Engineers Ltd <br />"
    +" 9. Hospital <br />"
    +" 10. Supermarket <br />"
    +" 11. Courts",
    children:{
      "1":{
        title: "Menu",
        message: "1. My Phone Balance <br />"
        +" 2. Withdraw Cash <br />"
        +" 0. Return to Menu <br />",
        children:{
          "2":{
            title: "Menu",
            message: "1. My Bank Savings <br />"
            +" 2. My Phone Balance <br />"
            +" 0. Return to Menu <br />",
          }
        }
      },
      "2":{
        title: "Menu",
        message: "1. My Bank Savings <br />"
        +" 2. Withdraw Cash <br />"
        +" 0. Return to Menu <br />"
      },
      "3":{
        title: "Menu",
        message: "1. Securities Assets <br />"
        +" 2. Real Estate Assets <br />"
        +" 3. Business Assets <br />"
        +" 0. Return to Menu <br />",
        children:{
          "2":{
            title: "Menu",
            message: "1. My Bank Savings <br />"
            +" 2. Withdraw Cash <br />"
            +" 0. Return to Menu <br />"
          }
        }
      }
    }
  }
  session;
  constructor(public http: Http) {
    console.log('Hello Menu Provider');
  }

  getResponse(value?){

    return new Promise((resolve, reject) => {
      if(value == ""){
        this.session = undefined;
      }else{
        this.http.get("../../../api/sqlViews.json?filter=name:eq:Find Event").subscribe((results) =>{

        },() =>{
          let response:any = {

          }
          if(this.session && value != "0"){
            console.log(value,this.session);
            response.title = this.session.children[value].title;
            response.message = this.session.children[value].message;
            this.session = this.session.children[value].children;
          }else{
            response.title = this.sequence.title;
            response.message = this.sequence.message;
            this.session = this.sequence;
          }
          setTimeout(() => {
            resolve(response)
          },Math.floor(Math.random() * (4)) * 1000);
        })
      }
    });
  }
}
