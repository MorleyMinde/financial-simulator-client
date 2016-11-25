import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BasePage} from "../pages/base/base";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BasePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      BasePage
  ],
  providers: []
})
export class AppModule {}
