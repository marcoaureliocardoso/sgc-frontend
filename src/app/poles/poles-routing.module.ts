import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoleCreateComponent } from './pole-create/pole-create.component';
import { PoleListComponent } from './pole-list/pole-list.component';
import { PoleUpdateComponent } from './pole-update/pole-update.component';
import { PoleComponent } from './pole/pole.component';

const routes: Routes = [
  { path: '', component: PoleListComponent },
  { path: 'create', component: PoleCreateComponent },
  { path: 'update/:id', component: PoleUpdateComponent },
  { path: ':id', component: PoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolesRoutingModule { }
