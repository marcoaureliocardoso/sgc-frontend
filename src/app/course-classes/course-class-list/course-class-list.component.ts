import { Component, inject } from '@angular/core';

import { CourseClass } from '../course-class';
import { CourseClassService } from '../course-class.service';

@Component({
  selector: 'app-course-class-list',
  templateUrl: './course-class-list.component.html',
  styleUrls: ['./course-class-list.component.css'],
})
export class CourseClassListComponent {
  public courseClassList: CourseClass[] = [];
  private courseClassService: CourseClassService = inject(CourseClassService);

  constructor() {
    this.getCourseClassList();
  }

  async getCourseClassList(): Promise<void> {
    this.courseClassList = await this.courseClassService.getCourseClassList();
  }
}
