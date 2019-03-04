import { Component, OnInit } from '@angular/core';

import { ApiServiceService} from '../../../api-service.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-send-to-retailer',
  templateUrl: './send-to-retailer.component.html',
  styleUrls: ['./send-to-retailer.component.scss']
})
export class SendToRetailerComponent implements OnInit {


  public retailers :  any[];
  public ownerId : any ;
  public role : any ;
  public currentProduct : any ;

  public retailedid : any ;

  //_______________________//
public retailerdate = new FormControl() ;
public retailer = new FormControl([]) ;



  constructor(private apiservice: ApiServiceService) { }




  ngOnInit() {
    //get the current product_________//
       //here we will get the current role and display the necessary component____>
       let userdata = JSON.parse(localStorage.getItem('userData'));

       let currentproduct = JSON.parse(localStorage.getItem('currentProduct'));

       this.currentProduct = currentproduct ;

       console.log('user data getted init' + JSON.stringify(userdata));
       this.role = userdata.userData.role ;
       this.ownerId = userdata.smartcontarct ;
       console.log('ownerId' + this.ownerId);

    //____get the list of the retailers_____//
    this. getRetailers();
  }


  getRetailers()
  {
    this.apiservice.getListRetailers()
    .subscribe(data => {
      console.log('list of retilers' + JSON.stringify(data));
      this.retailers = data ;
  
    } , error  => {
          alert("eror" + error)
      console.log("Error", error);
  
      })



  }

  public updateRetailer(event) {
    console.log('event' + event.target.value);
    this.retailer = event.target.value ;

  }

  Send()
  {
  let date = this.retailerdate.value();

  let obj ={
    'idProduct' : 2,
    'owner' : this.ownerId,
    'receiver' : 1,
    'shipdate' : date.getTime()
    }

    //____________________________________//* */
this.apiservice.sendProductToRetailer(obj)
.subscribe(data => {
  console.log('data from back-edn' + JSON.stringify(data));

  alert('Votre Produti est ajouté avec envyé avec succes !')
  //localStorage.setItem('currentProduct',JSON.stringify(data));





} ,  error  => {
    alert("eror" + error)
console.log("Error", error);

})

  
  }

}
