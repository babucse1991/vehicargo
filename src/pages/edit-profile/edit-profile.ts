import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {

  profile : any = {};

  constructor(public navCtrl: NavController, private service : CommonServiceProvider) {

  }

  ionViewCanEnter() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.service.startLoading();
    firebase.database().ref('userProfile/'+localConstants.uid).once('value').then( (snap) => {
      this.profile = snap.val();
      console.log(this.profile);
      this.service.stopLoading();
    }).catch( (error) => {
      this.service.stopLoading();
      this.service.commonAlert('Profile', error.message);
    });
  }

  updateProfileDetails() {
    this.service.startLoading();
    firebase.database().ref('userProfile/'+localConstants.uid).update(this.profile).then( (snap) => {
      console.log(snap);
      this.service.stopLoading();
      this.service.commonAlert('Profile', 'Your profile has updated');
    }).catch( (error) => {
      this.service.stopLoading();
      this.service.commonAlert('Profile', error.message);
    });
  }
  
}
