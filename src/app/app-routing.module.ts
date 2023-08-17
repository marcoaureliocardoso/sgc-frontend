import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './system/info/info.component';
import { LogsComponent } from './system/logs/logs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },

  { path: 'aprovados', loadChildren: () => import('./applicants/applicants.module').then(m => m.ApplicantsModule) },
  { path: 'colaboradores', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'cursos', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'disciplinas', loadChildren: () => import('./course-classes/course-classes.module').then(m => m.CourseClassesModule) },
  { path: 'documentos', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'funcoes', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  { path: 'polos', loadChildren: () => import('./poles/poles.module').then(m => m.PolesModule) },
  { path: 'vinculos', loadChildren: () => import('./bonds/bonds.module').then(m => m.BondsModule) },

  { path: 'papeis', loadChildren: () => import('./responsibilities/responsibilities.module').then(m => m.ResponsibilitiesModule) },
  { path: 'usuarios', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  
  { path: 'info', component: InfoComponent },
  { path: 'logs', component: LogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
