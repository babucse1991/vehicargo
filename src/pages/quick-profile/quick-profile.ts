import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import { CommonServiceProvider } from '../../providers/common-service/common-service'
import { localConstants } from '../../const/environment';

@Component({
  selector: 'page-quick-profile',
  templateUrl: 'quick-profile.html'
})
export class QuickProfilePage {

  param: any;
  profile: any = {};
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private service : CommonServiceProvider) {
      console.log(JSON.stringify(navParams));
      this.param = navParams.data;
  }

  ionViewDidLoad() {
        
  }

  saveProfileInfo() {

    this.service.startLoading();
    firebase.database().ref('userProfile/'+localConstants.uid).update(this.profile).then( (snap) => {
      console.log(snap);
      this.service.stopLoading();
      this.service.commonAlert('Profile', 'Updated your profile');
      this.navCtrl.setRoot(TabsPage);
   }).catch( (error) => {
     console.log('error.message : ' + error.message);
     this.service.stopLoading();
    this.service.commonAlert('Profile', error.message);
   });

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
