import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

@Component({
  selector: 'page-edit-truck-info',
  templateUrl: 'edit-truck-info.html'
})
export class EditTruckInfoPage {
  
  truckInfo : any = {};

  constructor(public navCtrl: NavController, private service : CommonServiceProvider) {
  }

  ionViewCanEnter() {
    this.getTruckInfoDetails();
  }

  getTruckInfoDetails() {
    this.service.startLoading();
    firebase.database().ref('usertruckInfo/'+localConstants.uid).once('value').then( (snap) => {
      let truckInfo = snap.val();
      if ( truckInfo != null && truckInfo != undefined ) {
        this.truckInfo = truckInfo;
        console.log(this.truckInfo);
      }
      this.service.stopLoading();
    }).catch( (error) => {
      this.service.stopLoading();
      this.service.commonAlert('truckInfo', error.message);
    });
  }

  updateTruckInfo() {
    this.service.startLoading();
    firebase.database().ref('usertruckInfo/'+localConstants.uid).update(this.truckInfo).then( (snap) => {
      console.log(snap);
      this.service.stopLoading();
      this.service.commonAlert('truckInfo', 'Your truckInfo has updated');
    }).catch( (error) => {
      this.service.stopLoading();
      this.service.commonAlert('truckInfo', error.message);
    });
  }
  
}
