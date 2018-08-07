import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';


import { QuickProfilePage } from '../quick-profile/quick-profile';
import { localConstants } from '../../const/environment';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  param: any;
  credentials: any = {};
  private user: firebase.User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private storage : Storage) {
    this.param = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage' + this.param.userType);
  }

  userSignUo() {

    firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.password).then((user) => {

      console.log(user);

      this.user = user;
      this.storage.set('usrData', { uid : this.user.uid, userType : this.param.userType });
      localConstants.uid = this.user.uid;
      localConstants.userType = this.param.userType;

      let alert = this.alertCtrl.create({
        title: 'Sign Up',
        subTitle: 'Successfully registered!',
        buttons: ['Dismiss']
      });
      alert.present();
      this.navCtrl.setRoot(QuickProfilePage);

    }).catch((error) => {
      console.log(' Sign in err : ' + error);
      let alert = this.alertCtrl.create({
        title: 'Sign Up',
        subTitle: error.message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

  }

}
