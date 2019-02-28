import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatToolbarModule,
        FormsModule,ReactiveFormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {}
