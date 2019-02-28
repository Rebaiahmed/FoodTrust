import { Component, OnInit } from '@angular/core';
import { SendToRetailerComponent} from '../add-product/send-to-retailer/send-to-retailer.component';
import { ConfirmProductReceptionComponent} from '../add-product/confirm-product-reception/confirm-product-reception.component';

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




  constructor() { }

  ngOnInit() {
    //here we will get the current role and display the necessary component____>
  }


  Getlocation()
  {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Got position", position.coords);
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    });

  }



  onSubmit() { this.submitted = true; }

  CreateProduct()
  {
    alert("submitted");
  }

}
