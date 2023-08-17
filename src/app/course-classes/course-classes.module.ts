import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseClassCreateComponent } from './course-class-create/course-class-create.component';
import { CourseClassListComponent } from './course-class-list/course-class-list.component';
import { CourseClassUpdateComponent } from './course-class-update/course-class-update.component';
import { CourseClassComponent } from './course-class/course-class.component';
import { CourseClassesRoutingModule } from './course-classes-routing.module';

@NgModule({
  declarations: [
    CourseClassComponent,
    CourseClassCreateComponent,
    CourseClassListComponent,
    CourseClassUpdateComponent,
  ],
  imports: [CommonModule, CourseClassesRoutingModule],
})
export class CourseClassesModule {}
