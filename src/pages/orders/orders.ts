import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDetailsPage } from '../order-details/order-details';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToOrderDetails(params){
    if (!params) params = {};
    this.navCtrl.push(OrderDetailsPage);
  }
}
