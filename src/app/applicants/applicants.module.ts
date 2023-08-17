import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApplicantCreateComponent } from './applicant-create/applicant-create.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './applicant-update/applicant-update.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantsRoutingModule } from './applicants-routing.module';

@NgModule({
  declarations: [
    ApplicantComponent,
    ApplicantCreateComponent,
    ApplicantListComponent,
    ApplicantUpdateComponent,
  ],
  imports: [
    CommonModule,
    ApplicantsRoutingModule
  ]
})
export class ApplicantsModule { }
