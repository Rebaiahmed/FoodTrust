import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackingRoutingModule} from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
    imports: [CommonModule, TrackingRoutingModule, MatGridListModule,NgxGraphModule,
      NgxChartsModule,LeafletModule],
    declarations: [TrackingComponent]
})
export class TrackingModule {}
