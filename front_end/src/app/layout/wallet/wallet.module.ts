import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule
} from '@angular/material';
import { WalletRoutingModule } from './wallet-routing.module'
import { WalletComponent } from './wallet.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [CommonModule, WalletRoutingModule, MatAutocompleteModule,
      MatSlideToggleModule,
      MatFormFieldModule,
      MatGridListModule,
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
    declarations: [WalletComponent]
})
export class WalletModule {}
