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


  confirmationcode = new FormControl();
  password= new FormControl();


    constructor(private router: Router , private apiservcie: ApiServiceService) {}

    ngOnInit() {}




    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
