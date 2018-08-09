import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import * as firebase from 'firebase';

import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
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
    });

  }

  goToEditProfile(params){
    if (!params) params = {};
    this.navCtrl.push(EditProfilePage);
  }
}
