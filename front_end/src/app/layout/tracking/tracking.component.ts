import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { latLng, tileLayer, circle, polygon } from 'leaflet';

import { ApiServiceService} from '../../api-service.service';


declare let L;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


// ____________________//
export interface Product {
  id: string;
  title: number;
  category: number;
  show: string ;

}







const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

    // google maps zoom level
    zoom = 16;
    // dataSource: MatTableDataSource<any>;

    displayedColumns: string[] = ['id', 'title', 'category'];
     products_data: Product[] ;
     dataSource = new MatTableDataSource<Product>();

     isFarmer = false ;
     isSupplier = false ;
     isRetailer = false ;

    /*options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: latLng(46.879966, -121.726909)
    };*/

    // initial center position for the map
    public products: any [] ;
    public ownerId: any ;
    public role: any ;
    public productHistory: any ;

    options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 6,
      center: latLng(46.879966, -121.726909)
    };

    layersControl = {
      baseLayers: {
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      overlays: {
        'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
        'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
      }
    };

    name = 'Angular 5';
    hierarchialGraph = {nodes: [], links: []};
    curve = shape.curveBundle.beta(1);
    // curve = shape.curveLinear;



    showGraph() {
      this.hierarchialGraph.nodes = [
        {
          id: 'start',
          label: 'start'
        }, {
          id: '1',
          label: 'Query ThreatConnect',
        }, {
          id: '2',
          label: 'Query XForce',
        }, {
          id: '3',
          label: 'Format Results'
        }, {
          id: '4',
          label: 'Search Splunk'
        }, {
          id: '5',
          label: 'Block LDAP'
        }, {
          id: '6',
          label: 'Email Results'
        }
    ];

    this.hierarchialGraph.links = [
      {
        source: 'start',
        target: '1',
        label: 'links to'
      }, {
        source: 'start',
        target: '2'
      }, {
        source: '1',
        target: '3',
        label: 'related to'
      }, {
        source: '2',
        target: '4'
      }, {
        source: '2',
        target: '6'
      }, {
        source: '3',
        target: '5'
      }
    ];

    }



  constructor(private apiservice: ApiServiceService) { }

  ngOnInit() {
    // here we will get the current role and display the necessary component____>
   const userdata = JSON.parse(localStorage.getItem('userData'));

   console.log('user data getted init' + JSON.stringify(userdata));
   this.role = userdata.userData.role ;
   this.ownerId = userdata.smartcontarct ;
   console.log('ownerId' + this.ownerId);


switch (this.role) {
  case 'Farmer':
    // code block
    // alert("farmer")
    this.isFarmer = true ;
    break;
  case 'Supplier':

  this.isSupplier = true ;
    // code block
    break;
  default:

  this.isRetailer = true ;
    // code block
}

this.getProducts();
this.showGraph();



  }

  select(event) {
    console.log(event);
  }




GetProductHistory(event, productId) {
  console.log('Checking passed item: ', productId);


  this.apiservice.getProductHistory(productId)
  .subscribe(data => {
    console.log('list of products ' + JSON.stringify(data));
    this.productHistory = data ;

    // showGraphs
    // _____display data___//

  } , error  => {
    alert('eror' + error);
    console.log('Error', error);

    });

}




// ________Get Products________________//

getProducts() {
  this.apiservice.getAllProducst()
  .subscribe(data => {
  console.log('list of products ' + data);
  this.products_data = data ;
  // this.dataSource.data= data
  this.dataSource.data = data;

  console.log('' +   this.dataSource.data );

} , error  => {
      alert('eror' + error);
  console.log('Error', error);

  });

}






  }

// just an interface for type safety.
interface point {
  lat: number;
  lng: number;
}
