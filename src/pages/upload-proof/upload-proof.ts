import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import * as firebase from 'firebase';

import { localConstants } from '../../const/environment';
import { CommonServiceProvider } from '../../providers/common-service/common-service';
@Component({
  selector: 'page-upload-proof',
  templateUrl: 'upload-proof.html',
})
export class UploadProofPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker,
    private toastCtrl: ToastController, private service : CommonServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadProofPage');
  }


  openImagePicker(){
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.uploadImageToFirebase(results[i]);
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
    }

    uploadImageToFirebase(image){
      // image = normalizeURL(image);
    
      this.service.startLoading();
      //uploads img to firebase storage
      this.uploadImage(image)
      .then(photoURL => {
        this.service.stopLoading();
        let toast = this.toastCtrl.create({
          message: 'Image was updated successfully',
          duration: 3000
        });
        toast.present();

        this.updateImgUrlToProfile(photoURL);

        });
      }
      
  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
        })
      })
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  updateImgUrlToProfile(photoURL) {

    firebase.database().ref('proofUrl/'+localConstants.uid).push(photoURL).then( (snap) => {
      console.log(snap);
      this.service.stopLoading();
      this.service.commonAlert('Proof', 'Your Proof has updated');
    }).catch( (error) => {
      this.service.stopLoading();
      this.service.commonAlert('Proof', error.message);
    });
  }


}
