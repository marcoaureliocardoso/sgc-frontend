import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BondCreateComponent } from './bond-create/bond-create.component';
import { BondListComponent } from './bond-list/bond-list.component';
import { BondUpdateComponent } from './bond-update/bond-update.component';
import { BondComponent } from './bond/bond.component';
import { BondsRoutingModule } from './bonds-routing.module';

@NgModule({
  declarations: [
    BondComponent,
    BondCreateComponent,
    BondListComponent,
    BondUpdateComponent,
  ],
  imports: [CommonModule, BondsRoutingModule],
})
export class BondsModule {}
