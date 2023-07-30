import { Component, inject } from '@angular/core';

import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  public courseList: Course[] = [];
  private courseService: CourseService = inject(CourseService);

  constructor() {
    this.getCourseList();
  }

  async getCourseList(): Promise<void> {
    this.courseList = await this.courseService.getCourseList();
  }
}
