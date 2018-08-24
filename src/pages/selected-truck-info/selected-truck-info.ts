import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
import * as firebase from 'firebase';
import {OrderDetailsPage} from '../order-details/order-details'

@Component({
  selector: 'page-selected-truck-info',
  templateUrl: 'selected-truck-info.html',
})
export class SelectedTruckInfoPage {

  truckInfo : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private service : CommonServiceProvider) {
  }

  ionViewDidLoad() {
    this.getTruckInfoDetails();
    console.log('ionViewDidLoad SelectedTruckInfoPage');
  }

  getTruckInfoDetails () {
    this.service.startLoading();
    firebase.database().ref('usertruckInfo/'+localConstants.uid).once('value').then( (snap) => {
      this.truckInfo = snap.val();
      console.log(this.truckInfo);
      this.service.stopLoading();
    });

  }

  bookingRequest(params){
    if (!params) params = {};
    this.navCtrl.push(OrderDetailsPage);
  }
}
