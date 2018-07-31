import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTruckInfoPage } from '../edit-truck-info/edit-truck-info';

@Component({
  selector: 'page-truck-info',
  templateUrl: 'truck-info.html'
})
export class TruckInfoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToEditTruckInfo(params){
    if (!params) params = {};
    this.navCtrl.push(EditTruckInfoPage);
  }
}
