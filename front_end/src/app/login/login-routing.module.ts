import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    },
    {
      path: '/login',
      component: LoginComponent
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
