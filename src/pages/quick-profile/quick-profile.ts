import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TruckFilterPage } from '../truck-filter/truck-filter';

@Component({
  selector: 'page-quick-profile',
  templateUrl: 'quick-profile.html'
})
export class QuickProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(TabsPage);
  }
  goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
}
