import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase  from 'firebase';


import { WelcomePage } from '../pages/welcome/welcome';


export const firebaseConfig = {
  apiKey: "AIzaSyDW6woVw3gDQVvKtreZ4g9igRW92knq4Sg",
		authDomain: "supermodular-c9b81.firebaseapp.com",
		databaseURL: "https://supermodular-c9b81.firebaseio.com",
		projectId: "supermodular-c9b81",
		storageBucket: "supermodular-c9b81.appspot.com",
		messagingSenderId: "374150420031"
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.rootPage = WelcomePage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(firebaseConfig);
  }
  
}
