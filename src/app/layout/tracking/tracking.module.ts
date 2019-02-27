import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackingRoutingModule} from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';


@NgModule({
    imports: [CommonModule, TrackingRoutingModule],
    declarations: [TrackingComponent]
})
export class TrackingModule {}
