import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

import { QuickProfilePage } from '../quick-profile/quick-profile';
import { TabsPage } from '../tabs/tabs';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import { SignupPage } from '../signup/signup';
import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

@Component({
  selector: 'page-customer-login',
  templateUrl: 'customer-login.html'
})
export class CustomerLoginPage {

  private user: firebase.User;
  private credentials : any = {};

  constructor(public navCtrl: NavController, private service : CommonServiceProvider,
    private storage : Storage) { }

  login() {
    this.service.startLoading();
    firebase.auth().signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then(( user ) => { 
      console.log(user);
      this.user = user;
      this.storage.set('usrData', { uid : this.user.uid, userType : 'CUSTOMER' });
      localConstants.uid = this.user.uid;
      localConstants.userType = 'CUSTOMER';
      this.service.stopLoading();
      this.navCtrl.setRoot(TabsPage);
    },(error) => { 
      this.service.stopLoading();
      this.service.commonAlert('Sign In', error.message);
    });
  }

  signUp(params){
    if (!params) params = { userType : 'CUSTOMER'};
    this.navCtrl.push(SignupPage, params);
  }

  goToQuickProfile(params){
    if (!params) params = {};
    this.navCtrl.push(QuickProfilePage);
  }goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
}
