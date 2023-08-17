import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponsibilityListComponent } from './responsibility-list/responsibility-list.component';

const routes: Routes = [
  { path: '', component: ResponsibilityListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibilitiesRoutingModule { }
