import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule
} from '@angular/material';

import { AddProductRoutingModule} from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';
import { SendToRetailerComponent } from './send-to-retailer/send-to-retailer.component';
import { ConfirmProductReceptionComponent } from './confirm-product-reception/confirm-product-reception.component';


@NgModule({
    imports: [CommonModule, AddProductRoutingModule,
      MatAutocompleteModule,
      FormModule,
      ReactiveFormsModule,
      MatSlideToggleModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSliderModule,
      FlexLayoutModule.withConfig({addFlexToParent: false})],
    declarations: [AddProductComponent, SendToRetailerComponent, ConfirmProductReceptionComponent]
})
export class AddProductModule {}
