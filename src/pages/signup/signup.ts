import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';


import { QuickProfilePage } from '../quick-profile/quick-profile';
import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  param: any;
  credentials: any = {};
  private user: firebase.User;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private storage : Storage, private service : CommonServiceProvider) {
    this.param = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage' + this.param.userType);
  }

  userSignUo() {
    this.service.startLoading();
    firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.password).then((user) => {

      console.log(user);

      this.user = user;
      this.storage.set('usrData', { uid : this.user.uid, userType : this.param.userType });
      localConstants.uid = this.user.uid;
      localConstants.userType = this.param.userType;

      firebase.database().ref('userProfile/'+localConstants.uid).set({ email : this.credentials.email, userType : localConstants.userType }).then( (snap) => {
        this.service.stopLoading();
        this.service.commonAlert('Sign Up', 'Successfully registered!');
        this.navCtrl.setRoot(QuickProfilePage);         
      });
     
    }).catch((error) => {
      this.service.stopLoading();
      this.service.commonAlert('Sign Up', error.message);
      console.log(' Sign in err : ' + error);
    });

  }

}
