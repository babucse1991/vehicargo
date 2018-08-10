import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController, LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';


@Injectable()
export class CommonServiceProvider {

  loading : any;

  constructor( private alertCtrl: AlertController, public loadingCtrl: LoadingController,
    private network: Network) {
    console.log('Hello CommonServiceProvider Provider');
    this.checkNetworkAvailability();
  }

  ngOninit(){
    console.log('Service initialized!');
    
  }

  checkNetworkAvailability() {
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.commonAlert( 'Network', 'network was disconnected') ;
    });

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      
      console.log('we got a wifi connection, woohoo!');
        
    });
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
