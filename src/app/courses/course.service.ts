import { Injectable } from '@angular/core';

import { API_COURSES } from '../app.api';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private url = API_COURSES;

  constructor() {}

  async getCourseList(): Promise<Course[]> {
    const response = await fetch(this.url);
    return await response.json();
  }
}
