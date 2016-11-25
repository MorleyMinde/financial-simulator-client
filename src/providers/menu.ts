import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Menu provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Menu {

  sequence = {
    title: "Menu",
    message: "1. My Bank Savings <br />"
    + " 2. My Phone Balance <br />"
    + " 3. Invest <br />"
    + " 4. Mobile Money Agent <br />"
    + " 5. Social Security Fund <br />"
    + " 6. Revenue Authority <br />"
    + " 7. Insurance Broker <br />"
    + " 8. Civil Engineers Ltd <br />"
    + " 9. Hospital <br />"
    + " 10. Supermarket <br />"
    + " 11. Courts",
    children: {
      "1": {
        title: "Menu",
        message: "1. My Bank Savings <br />"
        + " 2. Withdraw Cash <br />"
        + " 0. Return to Menu <br />",
        children: {
          "1": {
            title: "Statement",
            message: "Your Balance is 100,000/= <br />"
            + " 0. Return to Menu <br />"
          },
          "2": {
            title: "Draw",
            message: "Enter Amount to Draw<br />"
            + " 0. Return to Menu <br />"
          }
        }
      },
      "2": {
        title: "Menu",
        message: "1. My Phone Balance <br />"
        + " 2. Withdraw Cash <br />"
        + " 0. Return to Menu <br />",
        children: {
          "1": {
            title: "Statement",
            message: "Your Phone Balance is 100,000/= <br />"
            + " 0. Return to Menu <br />"
          },
          "2": {
            title: "Draw",
            message: "Enter Amount to Draw<br />"
            + " 0. Return to Menu <br />"
          }
        }
      },
      "3": {
        title: "Menu",
        message: "1. Securities Assets <br />"
        + " 2. Real Estate Assets <br />"
        + " 3. Business Assets <br />"
        + " 0. Return to Menu <br />",
        children: {
          "1": {
            title: "Menu",
            message: "1. View Assets <br />"
            + " 2. Buy Asset <br />"
            + " 0. Return to Menu <br />",
            children: {
              "1": {
                title: "Statement",
                message: "Your Asset Balance is 100,000/= <br />"
                + " 0. Return to Menu <br />"
              },
              "2": {
                title: "Buy",
                message: "Enter Amount to Buy<br />"
                + " 0. Return to Menu <br />"
              }
            }
          },
          "2": {
            title: "Menu",
            message: "1. View Real Estate <br />"
            + " 2. Buy Real Asset <br />"
            + " 0. Return to Menu <br />",
            children: {
              "1": {
                title: "Statement",
                message: "Your Real Estate Value is 100,000/= <br />"
                + " 0. Return to Menu <br />"
              },
              "2": {
                title: "Draw",
                message: "Enter Amount to Buy<br />"
                + " 0. Return to Menu <br />"
              }
            }
          },
          "3": {
            title: "Menu",
            message: "1. View Business Assets <br />"
            + " 2. Buy<br />"
            + " 0. Return to Menu <br />",
            children: {
              "1": {
                title: "Statement",
                message: "Your Business Assets Value is 100,000/= <br />"
                + " 0. Return to Menu <br />"
              },
              "2": {
                title: "Draw",
                message: "Enter Amount to Buy<br />"
                + " 0. Return to Menu <br />"
              }
            }
          }
        }
      },
      "4": {
        title: "Menu",
        message: "1. Cash Withdraw <br />"
        + " 2. Basic Life Needs <br />"
        + " 3. Municipal Council <br />"
        + " 4. Electricity Bill <br />"
        + " 5. Water Bill <br />"
        + " 0. Return to Menu <br />"
      },
      "7": {
        title: "Menu",
        message: "1. House Contents <br />"
        + " 2. Health <br />"
        + " 3. Fire <br />"
        + " 4. Life <br />"
        + " 0. Return to Menu <br />"
      }
    }
  }
  session;

  constructor(public http:Http) {
    console.log('Hello Menu Provider');
  }

  getResponse(value?) {

    return new Promise((resolve, reject) => {
      if (value == "") {
        this.session = undefined;
      } else {
        this.http.get("../../../api/sqlViews.json?filter=name:eq:Find Event").subscribe((results) => {

        }, () => {
          let response:any = {}
          if (this.session && value != "0") {
            console.log(this.session);
            if (this.session.children[value]) {
              response.title = this.session.children[value].title;
              response.message = this.session.children[value].message;
              this.session = this.session.children[value];
            } else {
              response.title = this.session.title;
              response.message = "Please enter the provided options <br />" + this.session.message;
            }
          } else {
            response.title = this.sequence.title;
            response.message = this.sequence.message;
            this.session = this.sequence;
          }
          setTimeout(() => {
            resolve(response)
          }, Math.floor(Math.random() * (4)) * 1000);
        })
      }
    });
  }
}
