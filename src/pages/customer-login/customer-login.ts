import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

import { QuickProfilePage } from '../quick-profile/quick-profile';
import { TabsPage } from '../tabs/tabs';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';
import { localConstants } from '../../const/environment';

@Component({
  selector: 'page-customer-login',
  templateUrl: 'customer-login.html'
})
export class CustomerLoginPage {

  private user: firebase.User;
  private credentials : any = {};

  constructor(public navCtrl: NavController, private alertCtrl : AlertController,
    private storage : Storage) { }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
    .then(( user ) => { 
      console.log(user);
      this.user = user;
      this.storage.set('usrData', { uid : this.user.uid, userType : 'CUSTOMER' });
      localConstants.uid = this.user.uid;
      localConstants.userType = 'CUSTOMER';
      this.navCtrl.setRoot(TabsPage);
    },(error) => { 
      let alert = this.alertCtrl.create({
        title: 'Sign In',
        subTitle: error.message,
        buttons: ['Dismiss']
      });
      alert.present();
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
