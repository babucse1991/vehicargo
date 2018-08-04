import { Component } from '@angular/core';
// import { ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsEvent, GoogleMapOptions, GoogleMaps, Marker, Geocoder, GeocoderResult } from '@ionic-native/google-maps';
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
  searchAddress: any;
  autocompleteItems: any;
  autocomplete: any = '';
  acService: any;
  placesService: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.loadMap(43.0741904,-89.3809802);
   
  }

  loadMap( lat, lng) {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: lat,
           lng: lng
         },
         zoom: 8,
         tilt: 30
       }
    };


    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready to use!');
      this.addMarkers();
    });

  }

  addMarkers() {
    this.map.addMarkerSync({
      title: 'Ionic marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.07,
        lng: -89.38
      }
    });

    this.map.addMarker({
      title: 'Ionic marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 40.07,
        lng: -89.38
      }
    }).then(this.onMarkerAdded);

  }

  onMarkerAdded(marker: Marker) {
    marker.one(GoogleMapsEvent.MARKER_CLICK).then(() => {
      alert('Marker : ' + marker.getTitle() + ' is clicked.');
    });
  }

  geoCoderAddressBar() {
    Geocoder.geocode({
      "address": this.searchAddress
    }).then((results: GeocoderResult[]) => {
      console.log(JSON.stringify(results));
      return this.map.addMarker({
        position: results[0].position,
        title: JSON.stringify(results[0].position)
      });
    })
  }

  updateSearch() {
    console.log('modal > updateSearch');
    if (this.autocomplete == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this;
    self.autocompleteItems = [];
    Geocoder.geocode({
      "address": this.autocomplete
    }).then((results: GeocoderResult[]) => {
      console.log(JSON.stringify(results));
      
      results.forEach(function (prediction) {
        self.autocompleteItems.push(prediction);

      });

    })
  }

  chooseItem( item) {
    // this.map.clear();

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: item.position.lat,
           lng: item.position.lng
         },
         zoom: 7,
         tilt: 30
       }
    };
    this.map.setOptions(mapOptions);  
    return this.map.addMarker({
        position: item.position,
        title: JSON.stringify(item.position)
      }).then( () => {
        this.autocompleteItems = [];
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

  goToTruckFilter(params) {
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  } goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
