import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { ApiServiceService} from '../../../api-service.service';

@Component({
  selector: 'app-confirm-product-reception',
  templateUrl: './confirm-product-reception.component.html',
  styleUrls: ['./confirm-product-reception.component.scss']
})
export class ConfirmProductReceptionComponent implements OnInit {

  datereception = new FormControl();
  public user : any ;
  public product : any ;

  constructor(private apiservice: ApiServiceService) { }

  ngOnInit() {
    let userdata = JSON.parse(localStorage.getItem('userData'));

   console.log('user data getted init' + JSON.stringify(userdata));

   this.user = userdata ;
  }




  getCurrentProduct()
  {

    let product =  JSON.parse(localStorage.getItem('currentProduct'));

 this.product = product ;

  }




  Send()
  {
    let date_retailer = this.datereception.value() ;
    let obj =
    {

    'retailerdatet' : date_retailer ,
    'id_retailer' : this.user.smartcontartc.data,
    'idProduct' :1

    }


    this.apiservice.sendProductToRetailer(obj)
    .subscribe(data => {
      alert("efectué avec succés !")

    } , error  => {
          alert("eror" + error)
      console.log("Error", error);

      })


  }
}
