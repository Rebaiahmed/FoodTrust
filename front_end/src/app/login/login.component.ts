import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ApiServiceService} from '../api-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email = new FormControl();
  password= new FormControl();


    constructor(private router: Router , private apiservcie: ApiServiceService) {}

    ngOnInit() {}




    onLogin() {
      console.log('e'+this.email.value )
      let email = this.email.value ;
      let password = this.password.value ;
      let obj ={
        'email' : email ,
        'password': password
      }
      this.apiservcie.Signin(obj)
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
