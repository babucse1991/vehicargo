import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { MyJobPage } from '../my-job/my-job';
import { TruckInfoPage } from '../truck-info/truck-info';
import { EditTruckInfoPage } from '../edit-truck-info/edit-truck-info';

@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html'
})
export class MenusPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToEditProfile(params){
    if (!params) params = {};
    this.navCtrl.push(EditProfilePage);
  }goToMyJob(params){
    if (!params) params = {};
    this.navCtrl.push(MyJobPage);
  }goToTruckInfo(params){
    if (!params) params = {};
    this.navCtrl.push(TruckInfoPage);
  }goToEditTruckInfo(params){
    if (!params) params = {};
    this.navCtrl.push(EditTruckInfoPage);
  }
}
