import { Component, OnInit } from '@angular/core';

import { ApiServiceService} from '../../../api-service.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { RealTimeServiceService } from '../../../real-time-service.service';


@Component({
  selector: 'app-send-to-retailer',
  templateUrl: './send-to-retailer.component.html',
  styleUrls: ['./send-to-retailer.component.scss']
})
export class SendToRetailerComponent implements OnInit {


  public retailers:  any[];
  public ownerId: any ;
  public role: any ;
  public currentProduct: any ;

  public retailedid: any ;
  public  farmer: any ;
  public product: any ;

  // _______________________//
public retailerdate = new FormControl() ;
public retailer = new FormControl([]) ;



  constructor(private apiservice: ApiServiceService,  private realtime: RealTimeServiceService) { }




  ngOnInit() {
    // get the current product_________//
       // here we will get the current role and display the necessary component____>
       const userdata = JSON.parse(localStorage.getItem('userData'));

       const currentproduct = JSON.parse(localStorage.getItem('currentProduct'));

       this.currentProduct = currentproduct ;

       console.log('user data getted init' + JSON.stringify(this.currentProduct ));
       this.role = userdata.userData.role ;
       this.ownerId = userdata.smartcontarct ;
       this.farmer = userdata.firstName + '__' + userdata.lastName;
       console.log('ownerId' + this.ownerId);

    // ____get the list of the retailers_____//
    this. getRetailers();

    if (this.role === 'Supplier') {
      this.getUserNotifications(1);

    }
  }


  getRetailers() {
    this.apiservice.getListRetailers()
    .subscribe(data => {
      console.log('list of retilers' + JSON.stringify(data));
      this.retailers = data ;

    } , error  => {
          alert('eror' + error);
      console.log('Error', error);

      });



  }

  public updateRetailer(event) {
    console.log('event' + event.target.value);
    this.retailer = event.target.value ;

  }

  Send() {
  const date = this.retailerdate.value;

  const obj = {
    'idProduct' : 2,
    'owner' : this.ownerId,
    'receiver' : 1,
    'shipdate' : date.getTime(),
    'farmerName': this.farmer,
    'productName': 'Bannanes'
    };

    // ____________________________________//* */
this.apiservice.sendProductToRetailer(obj)
.subscribe(data => {
  console.log('data from back-edn' + JSON.stringify(data));

  alert('Votre Produti est envoyé avec succes !');
  // localStorage.setItem('currentProduct',JSON.stringify(data));





} ,  error  => {
    alert('eror' + error);
console.log('Error', error);

});


  }



  getUserNotifications(userId) {
    this.realtime.onNotification(userId)
    .subscribe(data => {
      console.log('data rom server' + JSON.stringify(data));
      this.product = data ;


   });
  }

}
