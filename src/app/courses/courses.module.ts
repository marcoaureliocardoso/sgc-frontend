import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseComponent } from './course/course.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CourseComponent,
    CourseCreateComponent,
    CourseListComponent,
    CourseUpdateComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule],
})
export class CoursesModule {}
