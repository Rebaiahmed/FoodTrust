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
  password = new FormControl();


    constructor(private router: Router , private apiservcie: ApiServiceService) {}

    ngOnInit() {}




    onLogin() {

        // this.router.navigate(['/dashboard']);
      console.log('e' + this.email.value );
      const email = this.email.value ;
      const password = this.password.value ;
      const obj = {
        'email' : email ,
        'password': password
      };
      this.apiservcie.Signin(obj)
      .subscribe(data => {
      console.log('data from back-end' + JSON.stringify(data));
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('userData', JSON.stringify(data));
      this.router.navigate(['/dashboard']);

  } ,  error  => {
    alert('eror' + error);
    console.log('Error', error);

    });

    }
}
