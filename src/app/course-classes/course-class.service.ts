import { Injectable } from '@angular/core';

import { API_COURSE_CLASSES } from '../app.api';
import { CourseClass } from './course-class';

@Injectable({
  providedIn: 'root',
})
export class CourseClassService {
  private url = API_COURSE_CLASSES;

  constructor() {}

  async getCourseClassList(): Promise<CourseClass[]> {
    const response = await fetch(this.url);
    return await response.json();
  }
}
