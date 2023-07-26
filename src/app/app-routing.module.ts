import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ApplicantCreateComponent } from './applicants/applicant-create/applicant-create.component';
import { ApplicantListComponent } from './applicants/applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './applicants/applicant-update/applicant-update.component';
import { ApplicantComponent } from './applicants/applicant/applicant.component';
import { BondCreateComponent } from './bonds/bond-create/bond-create.component';
import { BondListComponent } from './bonds/bond-list/bond-list.component';
import { BondUpdateComponent } from './bonds/bond-update/bond-update.component';
import { BondComponent } from './bonds/bond/bond.component';
import { CourseClassCreateComponent } from './course-classes/course-class-create/course-class-create.component';
import { CourseClassListComponent } from './course-classes/course-class-list/course-class-list.component';
import { CourseClassUpdateComponent } from './course-classes/course-class-update/course-class-update.component';
import { CourseClassComponent } from './course-classes/course-class/course-class.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseUpdateComponent } from './courses/course-update/course-update.component';
import { CourseComponent } from './courses/course/course.component';
import { DocumentCreateComponent } from './documents/document-create/document-create.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentUpdateComponent } from './documents/document-update/document-update.component';
import { DocumentComponent } from './documents/document/document.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employees/employee-update/employee-update.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { PoleCreateComponent } from './poles/pole-create/pole-create.component';
import { PoleListComponent } from './poles/pole-list/pole-list.component';
import { PoleUpdateComponent } from './poles/pole-update/pole-update.component';
import { PoleComponent } from './poles/pole/pole.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleUpdateComponent } from './roles/role-update/role-update.component';
import { RoleComponent } from './roles/role/role.component';

import { InfoComponent } from './system/info/info.component';
import { LogsComponent } from './system/logs/logs.component';

const routes: Routes = [
  // { path: 'applicants', loadChildren: () => import('./applicants/applicants.module').then(m => m.ApplicantsModule) },

  { path: '', component: DashboardComponent },

  { path: 'aprovados', component: ApplicantListComponent },
  { path: 'aprovados/create', component: ApplicantCreateComponent },
  { path: 'aprovados/update/:id', component: ApplicantUpdateComponent },
  { path: 'aprovados/:id', component: ApplicantComponent },
  { path: 'vinculos', component: BondListComponent },
  { path: 'vinculos/create', component: BondCreateComponent },
  { path: 'vinculos/update/:id', component: BondUpdateComponent },
  { path: 'vinculos/:id', component: BondComponent },
  { path: 'disciplinas', component: CourseClassListComponent },
  { path: 'disciplinas/create', component: CourseClassCreateComponent },
  { path: 'disciplinas/update/:id', component: CourseClassUpdateComponent },
  { path: 'disciplinas/:id', component: CourseClassComponent },
  { path: 'cursos', component: CourseListComponent },
  { path: 'cursos/create', component: CourseCreateComponent },
  { path: 'cursos/update/:id', component: CourseUpdateComponent },
  { path: 'cursos/:id', component: CourseComponent },
  { path: 'documentos', component: DocumentListComponent },
  { path: 'documentos/create', component: DocumentCreateComponent },
  { path: 'documentos/update/:id', component: DocumentUpdateComponent },
  { path: 'documentos/:id', component: DocumentComponent },
  { path: 'colaboradores', component: EmployeeListComponent },
  { path: 'colaboradores/create', component: EmployeeCreateComponent },
  { path: 'colaboradores/update/:id', component: EmployeeUpdateComponent },
  { path: 'colaboradores/:id', component: EmployeeComponent },
  { path: 'polos', component: PoleListComponent },
  { path: 'polos/create', component: PoleCreateComponent },
  { path: 'polos/update/:id', component: PoleUpdateComponent },
  { path: 'polos/:id', component: PoleComponent },
  { path: 'funcoes', component: RoleListComponent },
  { path: 'funcoes/create', component: RoleCreateComponent },
  { path: 'funcoes/update/:id', component: RoleUpdateComponent },
  { path: 'funcoes/:id', component: RoleComponent },

  { path: 'info', component: InfoComponent },
  { path: 'logs', component: LogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
