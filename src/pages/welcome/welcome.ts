import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TruckLoginPage } from '../truck-login/truck-login';
import { QuickProfilePage } from '../quick-profile/quick-profile';
import { HomePage } from '../home/home';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import { CustomerLoginPage } from '../customer-login/customer-login';
import { TabsPage } from '../tabs/tabs';
import { localConstants } from '../../const/environment';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  
  whileLogin : boolean = true;

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  ionViewCanEnter() {
    this.storage.get('usrData').then((val) => {
      let localUserInfo = val;
      console.log(' Local UsrData : ', JSON.stringify(localUserInfo));
      if (localUserInfo != undefined && localUserInfo.uid != undefined) {
        localConstants.uid = localUserInfo.uid;
        localConstants.userType = localUserInfo.userType;
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  ngOnInit() {
    
  }

  goToTruckLogin(params){
    if (!params) params = {};
    this.navCtrl.push(TruckLoginPage).then(() => {
    });
  }
  
  goToQuickProfile(params){
    if (!params) params = {};
    this.navCtrl.push(QuickProfilePage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
  
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
  
  goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
  
  goToCustomerLogin(params){
    if (!params) params = {};
    this.navCtrl.push(CustomerLoginPage).then(() => {
    });
  }
}
