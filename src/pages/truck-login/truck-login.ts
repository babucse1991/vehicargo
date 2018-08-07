import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

import { QuickProfilePage } from '../quick-profile/quick-profile';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import { AlertController } from 'ionic-angular';
import { localConstants } from '../../const/environment';

@Component({
  selector: 'page-truck-login',
  templateUrl: 'truck-login.html'
})
export class TruckLoginPage {

  private user: firebase.User;
  private credentials : any = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    private storage : Storage) { }


  ngOnInit() {
    console.log('Sign in');
    
  }

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


    // firebase.database().ref('test-users').push({ '1234': 'This is first value' }).then(() => {
    //   // alert('Saved');
    // }).catch((e) => {
    //   console.log(e);
    // });

    // firebase.database().ref('test-users/').on('value', function (snap) {
    //   console.log(snap.val());
    // });
  }


  signUp(params){
    if (!params) params = { userType : 'DRIVER'};
    this.navCtrl.push(SignupPage, params);
  }
  goToQuickProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(QuickProfilePage);
  } goToTruckFilter(params) {
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
}
