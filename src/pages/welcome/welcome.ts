import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TruckLoginPage } from '../truck-login/truck-login';
import { QuickProfilePage } from '../quick-profile/quick-profile';
import { HomePage } from '../home/home';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import { CustomerLoginPage } from '../customer-login/customer-login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  whileLogin : boolean = true;

  constructor(public navCtrl: NavController) {
  }
  goToTruckLogin(params){
    if (!params) params = {};
    this.navCtrl.push(TruckLoginPage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
  
  goToQuickProfile(params){
    if (!params) params = {};
    this.navCtrl.push(QuickProfilePage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
  
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
  
  goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
  
  goToCustomerLogin(params){
    if (!params) params = {};
    this.navCtrl.push(CustomerLoginPage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
}
