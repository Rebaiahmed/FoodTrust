import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import { latLng, tileLayer } from 'leaflet';

declare let L;


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

    // google maps zoom level
    zoom: number = 16;

    /*options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(46.879966, -121.726909)
    };*/

    // initial center position for the map


    options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 6,
      center: latLng(46.879966, -121.726909)
    };

    name = 'Angular 5';
    hierarchialGraph = {nodes: [], links: []}
    curve = shape.curveBundle.beta(1);
    // curve = shape.curveLinear;

    public ngOnInit():void {
      this.showGraph();

    }

    showGraph() {
      this.hierarchialGraph.nodes = [
    {
      id: 'start',
      label: 'Grower:Foulen Ben Foulen',
      position: 'x0'
    }, {
      id: '1',
      label: 'Supplier:Foulen Ben Foulen',
      position: 'x1'
    }
    ];

    this.hierarchialGraph.links = [
    {
      source: 'start',
      target: '1',
      label: 'Process#1'
    },
    ];

    }

  constructor() { }

  select(event)
  {
    console.log(event)
  }
  }

// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}
