import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToEditProfile(params){
    if (!params) params = {};
    this.navCtrl.push(EditProfilePage);
  }
}
