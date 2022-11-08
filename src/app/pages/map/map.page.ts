import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
   
  public map : mapboxgl.Map;
  public style ='mapbox://styles/mapbox/streets-v11'

  constructor() { 
    mapboxgl.YOUR_MAPBOX_ACCESS_TOKEN = environment.MAPBOX_KEY   //pueden faltar cosas aca para que inicialice 
  }

  ngOnInit() {
    
  }

  ionViwerWillEnter(){
    if(!this.map){
      this.buildmap();
    }
  }

  buildmap(){
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center:[
        -70.7702574,
        -33.4724224

      ]

    })
  }
}
