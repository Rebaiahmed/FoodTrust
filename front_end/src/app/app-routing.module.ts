import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: './login/login.module#LoginModule'
    },
    {
      path: '',
      redirectTo: 'register',
      pathMatch: 'full'
    }
    ,
   /* {
      path: 'login',
      loadChildren: './login/login.module#LoginModule.'
  }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
