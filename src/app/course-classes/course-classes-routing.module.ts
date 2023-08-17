import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseClassCreateComponent } from './course-class-create/course-class-create.component';
import { CourseClassListComponent } from './course-class-list/course-class-list.component';
import { CourseClassUpdateComponent } from './course-class-update/course-class-update.component';
import { CourseClassComponent } from './course-class/course-class.component';

const routes: Routes = [
  { path: '', component: CourseClassListComponent },
  { path: 'create', component: CourseClassCreateComponent },
  { path: 'update/:id', component: CourseClassUpdateComponent },
  { path: ':id', component: CourseClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseClassesRoutingModule { }
