import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import { NavController } from 'ionic-angular';
import { TruckFilterPage } from '../truck-filter/truck-filter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  
  constructor(public navCtrl: NavController) {
  
  }
  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }

  goToTruckFilter(params){
    if (!params) params = {};
    this.navCtrl.push(TruckFilterPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
