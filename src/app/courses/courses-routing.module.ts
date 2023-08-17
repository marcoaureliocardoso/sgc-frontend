import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'create', component: CourseCreateComponent },
  { path: 'update/:id', component: CourseUpdateComponent },
  { path: ':id', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
