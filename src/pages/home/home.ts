import { Component } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsEvent, GoogleMaps  } from '@ionic-native/google-maps';
// import {} from '@types/googlemaps';
import { NavController } from 'ionic-angular';
import { TruckFilterPage } from '../truck-filter/truck-filter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*@ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;*/

  map: GoogleMap;
  
  
  constructor(public navCtrl: NavController) {
  
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {

    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready to use!');
    });

  }

  /*ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }*/

  goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
