import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, TransactionsRoutingModule,
      MatTableModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatInputModule ],
    declarations: [TransactionsComponent]
})
export class TransactionsModule {}
