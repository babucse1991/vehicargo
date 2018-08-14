import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProfilePage } from '../profile/profile';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { MyJobPage } from '../my-job/my-job';
import { TruckInfoPage } from '../truck-info/truck-info';
import { EditTruckInfoPage } from '../edit-truck-info/edit-truck-info';
import { UploadProofPage } from '../upload-proof/upload-proof';
import { WelcomePage } from '../welcome/welcome';
import { localConstants } from '../../const/environment';

@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html'
})
export class MenusPage {

  constructor(public navCtrl: NavController,  private storage: Storage) {
  }

  logout() {
    this.storage.clear();
    this.storage.get('usrData').then((val) => {
      let localUserInfo = val;
      console.log(' Local UsrData : ', JSON.stringify(localUserInfo));
      if (localUserInfo == undefined || localUserInfo == null ) {
        localConstants.uid = '';
        localConstants.userType = '';
        this.navCtrl.setRoot(WelcomePage);
      }
    });
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
  goToUploadProof(params){
    if (!params) params = {};
    this.navCtrl.push(UploadProofPage);
  }
}
