import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BondCreateComponent } from './bond-create/bond-create.component';
import { BondListComponent } from './bond-list/bond-list.component';
import { BondUpdateComponent } from './bond-update/bond-update.component';
import { BondComponent } from './bond/bond.component';

const routes: Routes = [
  { path: '', component: BondListComponent },
  { path: 'create', component: BondCreateComponent },
  { path: 'update/:id', component: BondUpdateComponent },
  { path: ':id', component: BondComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondsRoutingModule { }
