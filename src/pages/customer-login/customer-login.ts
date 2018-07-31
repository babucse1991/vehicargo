import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuickProfilePage } from '../quick-profile/quick-profile';
import { HomePage } from '../home/home';
import { TruckFilterPage } from '../truck-filter/truck-filter';

@Component({
  selector: 'page-customer-login',
  templateUrl: 'customer-login.html'
})
export class CustomerLoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToQuickProfile(params){
    if (!params) params = {};
    this.navCtrl.push(QuickProfilePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
}
