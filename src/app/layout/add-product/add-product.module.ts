import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddProductRoutingModule} from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';


@NgModule({
    imports: [CommonModule, AddProductRoutingModule],
    declarations: [AddProductComponent]
})
export class AddProductModule {}
