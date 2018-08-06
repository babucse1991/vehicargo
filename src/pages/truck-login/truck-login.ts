import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuickProfilePage } from '../quick-profile/quick-profile';
import { HomePage } from '../home/home';
import { TruckFilterPage } from '../truck-filter/truck-filter';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-truck-login',
  templateUrl: 'truck-login.html'
})
export class TruckLoginPage {

  private user: firebase.User;
  
  constructor(public navCtrl: NavController) {
    
  }


  ngOnInit() {
    console.log('Sign in with email1111');
    this.login();
  }

  login() {


    //  let customAuth = firebase.auth().createCustomToken('9542587457');
      

    // this.afAuth.auth.signInWithCustomToken('customAuth').then( ( user ) => {

    //   console.log(user);

    // }).catch(function (error) {
    //   // Handle Errors here.
    //   var errorMessage = error.message;
    //   console.log('ERRRR : ' +errorMessage);

    // });
    let credentials = {
      email: 'babu@gmail.com',
      password: 'password'
    };

    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then(( user ) => {

      console.log(user);

    }).catch(function(error) {
      // Handle Errors here.
      
      console.log(' Sign in err : ' + error);
      
    });


    console.log('Sign in with email');
    

    firebase.auth().signInWithEmailAndPassword(credentials.email,
      credentials.password).then(() => { this.navCtrl.setRoot(HomePage) },
        error => { alert(error.message) }
      );


    firebase.database().ref('test-users').push({ '1234': 'This is first value' }).then(() => {
      // alert('Saved');
    }).catch((e) => {
      console.log(e);
    });

    firebase.database().ref('test-users/').on('value', function (snap) {
      console.log(snap.val());
    });
  }



  goToQuickProfile(params) {
    if (!params) params = {};
    this.navCtrl.push(QuickProfilePage);
  } goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  } goToTruckFilter(params) {
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }
}
