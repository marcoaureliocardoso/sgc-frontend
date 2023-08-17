import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './applicant-update/applicant-update.component';
import { ApplicantComponent } from './applicant/applicant.component';

const routes: Routes = [
  { path: '', component: ApplicantListComponent },
  { path: 'create', component: ApplicantCreateComponent },
  { path: 'update/:id', component: ApplicantUpdateComponent },
  { path: ':id', component: ApplicantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantsRoutingModule { }
