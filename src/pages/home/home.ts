import { Component } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsEvent, GoogleMaps, Marker, Geocoder, GeocoderResult  } from '@ionic-native/google-maps';
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
  searchAddress : any;
  
  constructor(public navCtrl: NavController) {
  
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {

    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready to use!');
      this.addMarkers();
    });

  }

  addMarkers() {
    this.map.addMarkerSync({
      title : 'Ionic marker',
      icon : 'blue',
      animation : 'DROP',
      position : { 
        lat : 43.07,
        lng : -89.38
       }
    });
  
    this.map.addMarker({
      title : 'Ionic marker',
      icon : 'blue',
      animation : 'DROP',
      position : { 
        lat : 40.07,
        lng : -89.38
       }
    }).then(this.onMarkerAdded);

}

geoCoderAddressBar() {
  Geocoder.geocode({
    "address": this.searchAddress
  }).then( (results : GeocoderResult[]) => {
    console.log(results);
    return this.map.addMarker({
      position : results[0].position,
      title : JSON.stringify(results[0].position)
    });
  })
}

onMarkerAdded( marker : Marker ) {
  marker.one(GoogleMapsEvent.MARKER_CLICK).then( () => {
    alert('Marker : ' + marker.getTitle() + ' is clicked.');
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
