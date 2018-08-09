import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController, LoadingController } from 'ionic-angular';


@Injectable()
export class CommonServiceProvider {

  loading : any;

  constructor( private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello CommonServiceProvider Provider');
  }

  commonAlert( title, subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  startLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
  
  stopLoading() {
    this.loading.dismiss();
  }
}
