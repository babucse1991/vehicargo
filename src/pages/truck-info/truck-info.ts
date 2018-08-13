import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTruckInfoPage } from '../edit-truck-info/edit-truck-info';
import * as firebase from 'firebase';

import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

@Component({
  selector: 'page-truck-info',
  templateUrl: 'truck-info.html'
})
export class TruckInfoPage {

  truckInfo : any = {};

  constructor(public navCtrl: NavController, private service : CommonServiceProvider) {
  }

  goToEditTruckInfo(params){
    if (!params) params = {};
    this.navCtrl.push(EditTruckInfoPage);
  }

  ionViewCanEnter() {
    this.getTruckInfoDetails();
  }

  getTruckInfoDetails () {

    firebase.database().ref('usertruckInfo/'+localConstants.uid).once('value').then( (snap) => {
      this.truckInfo = snap.val();
      console.log(this.truckInfo);
      this.service.stopLoading();
    });

  }
}
