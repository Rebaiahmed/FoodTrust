import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackingRoutingModule} from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';


@NgModule({
    imports: [CommonModule, TrackingRoutingModule, MatGridListModule,NgxGraphModule,
      NgxChartsModule,LeafletModule, MatTableModule,MatCardModule,MatButtonModule,MatIconModule,MatTabsModule,
      MatListModule, MatIconModule],
    declarations: [TrackingComponent]
})
export class TrackingModule {}
