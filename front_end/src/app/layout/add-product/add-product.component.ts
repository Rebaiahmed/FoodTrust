import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  lat:any ;
  lon:any;
  submitted = false;


//_________Declare the FORM of the product_________//

/*profileForm = this.fb.group({
  productTitle: ['', Validators.required],
  productCategory: [''],

});*/




  constructor() { }

  ngOnInit() {
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


}
