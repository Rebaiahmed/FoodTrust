import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WalletRoutingModule } from './wallet-routing.module'
import { WalletComponent } from './wallet.component';

@NgModule({
    imports: [CommonModule, WalletRoutingModule],
    declarations: [WalletComponent]
})
export class WalletModule {}
