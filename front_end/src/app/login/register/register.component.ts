import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent} from '../login.component';
import {EtherServiceService} from '../../ether-service.service';
import { User} from '../user.model';

import { WEB3 } from '../../Web3';
import Web3 from 'web3';


import { ApiServiceService} from '../../api-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser = new User('','','','');



//__________Attribute to show login or Register__________//

showRegister : boolean= true;




  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  cities : ['Tunis','Beja','Bizerte','Sfax', 'Nabeul'];
  //_
  farmerselected : boolean = false ;
  supplierseleetced : boolean = false ;
  retailerselected : boolean = false ;


  //__________________________//
  amount = new FormControl();
  role = new FormControl();
  //______prepare the other fields________//
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  phone= new FormControl();
  password = new FormControl();
  address = new FormControl();
  city= new FormControl();

  activitysector = new FormControl();
  supplierCompany = new FormControl();
  retailercompanyName = new FormControl();





onAmountChange() {
  console.log(this.amount.value);
}

//_______________________//

onRoleSelection() {

  switch(this.role.value) {
    case "Farmer":
      // code block
      this.farmerselected = true;
      //______________________//
    this.retailerselected = false;
   this.supplierseleetced = false;
      break;
    case "Supplier":
      // code block
      this.supplierseleetced = true;
      //___set the others to false____//
      this.farmerselected = false;
      this.retailerselected = false;

      break;
    default:
      // code block
      this.retailerselected = true;
         //___set the others to false____//
      this.supplierseleetced = false;
      this.farmerselected = false;
  }
}



  constructor(private router: Router, private ether: EtherServiceService,
    @Inject(WEB3) private web3: Web3,  private apiservice: ApiServiceService) {


  }



  async ngOnInit() {
    //console.log('web3 hey' + this.web3.eth);
    /*if ('enable' in this.web3.currentProvider) {
      await this.web3.currentProvider.enable();
    }*/

    //const accounts = await this.web3.eth.getAccounts();
    //console.log(accounts);
}

//__________________________//
initAndDisplayAccount = () => {

  let that = this;

  /*this.ether.getAccountInfo().then(function(acctInfo){

  console.log('acount info' + JSON.stringify(acctInfo));

  }).catch(function(error){

  console.log(error);

  });*/

  };
  //_______________________//



//_________________________________//
selectForm()
{
  this.showRegister = ! this.showRegister;
}




  onRegister() {

  //__________Get allthe data__________________//

  /*
  activitysector = new FormControl();
  supplierCompany = new FormControl();
  retailercompanyName = new FormControl();*/
  let obj ={
    'firstName' : this.firstName.value ,
    'lastName' : this.lastName.value ,
    'phone' : this.phone.value ,
    'email' : this.email.value ,
    'role' : this.role.value ,
    'address' : this.address.value ,
    'activity' : this.activitysector.value ,
    'companyName' : this.supplierCompany.value ,
    'retailercompanyName' :this.retailercompanyName.value
  }

  console.log('obj' + JSON.stringify(obj));

      /*localStorage.setItem('isLoggedin', 'true');
      this.router.navigate(['/dashboard']);*/
     // this.ether.CreateAccount("test");

    this.apiservice.createAccount(obj)
    .subscribe(data => {
      console.log('data from back-end' + JSON.stringify(data));
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('userData', JSON.stringify(data));
      this.router.navigate(['/dashboard']);



  } ,  error  => {
    alert("eror" + error)
    console.log("Error", error);

    })



  }

}
