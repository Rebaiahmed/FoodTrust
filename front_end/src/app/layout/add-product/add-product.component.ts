import { Component, OnInit } from '@angular/core';
import { SendToRetailerComponent} from '../add-product/send-to-retailer/send-to-retailer.component';
import { ConfirmProductReceptionComponent} from '../add-product/confirm-product-reception/confirm-product-reception.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


import { ApiServiceService} from '../../api-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  lat:any ;
  lon:any;
  submitted = false;
  isFarmer: boolean = false ;
  isSupplier: boolean = false ;
  isRetailer: boolean = false ;

  role: string = '';


//_________Declare the FORM of the product_________//

/*profileForm = this.fb.group({
  productTitle: ['', Validators.required],
  productCategory: [''],

});*/



public  suppliers : number[] =[];
public products: any [] ;
public ownerId : any ;
//__________________________//
title = new FormControl();
price = new FormControl();
category = new FormControl();
quantity = new FormControl();
hardate = new FormControl();
city = new FormControl();
description = new FormControl();



//_______________________//
 supplierdate = new FormControl() ;
 product = new FormControl([]) ;
 supplier = new FormControl([]) ;

  constructor(private apiservice: ApiServiceService) { }

  ngOnInit() {
    //here we will get the current role and display the necessary component____>
    let userdata = JSON.parse(localStorage.getItem('userData'));

   console.log('user data getted init' + JSON.stringify(userdata));
   this.role = userdata.userData.role ;
   this.ownerId = userdata.smartcontarct ;
   console.log('ownerId' + this.ownerId);


switch(this.role) {
  case "Farmer":
    // code block
    //alert("farmer")
    this.isFarmer = true ;
    break;
  case "Supplier":

  this.isSupplier = true ;
    // code block
    break;
  default:

  this.isRetailer = true ;
    // code block
}

//______load the list of suppliers________________//
this.getSuppliers()
this.getProducts();



  }


  Getlocation()
  {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords);
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    });

  }




  getSuppliers()
  {
    this.apiservice.getListSuppliers()
    .subscribe(data => {
    console.log('list of suppliers' + JSON.stringify(data));
    this.suppliers = data ;

  } , error  => {
        alert("eror" + error)
    console.log("Error", error);

    })

  }



//________Get Products________________//

getProducts()
{
  this.apiservice.getAllProducst()
  .subscribe(data => {
  console.log('list of products ' + JSON.stringify(data));
  this.products = data ;

} , error  => {
      alert("eror" + error)
  console.log("Error", error);

  })

}





  onSubmit() { this.submitted = true; }

  CreateProduct()
  {
    let date = this.hardate.value
    console.log('timpstamp' + date.getTime());
    //alert("submitted");
    let obj ={
      'title' : this.title.value ,
      'type' : this.category.value ,
      'city' : this.city.value ,
      'quantity' : this.quantity.value ,
      'hardate' : date.getTime(),
      'owner' : this.ownerId

    }


  //____________________________________//* */
  this.apiservice.createProduct(obj)
    .subscribe(data => {
      console.log('data from back-edn' + JSON.stringify(data));

      localStorage.setItem('currentProduct',JSON.stringify(data));

    alert("Votre produit est ajouté au Blockchain !")



  } ,  error  => {
        alert("eror" + error)
    console.log("Error", error);

    })



  }



  public updateSupplier(event) {
    console.log('event' + event.target.value);
    this.supplier = event.target.value ;

  }



 public updateProduct(event) {
    console.log('event' + event.target.value);
    this.product = event.target.value ;

  }

//___________Send to Supplier______________________//

SendSupplier()
{
//console.log('ss' + this.supplierdate.value());
  //let shipdate = this.supplierdate.value() ;
  //alert("submitted");
//console.log('date ' + this.supplierdate.value())


  let obj ={
  'idProduct' : 1,
  'idOwner' : this.ownerId,
  'idReciver' : 1,
  'shipdate' : new Date().getTime(),
  'city' : 'Sfax'
  }



//____________________________________//* */
this.apiservice.sendProducttoSupplier(obj)
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
