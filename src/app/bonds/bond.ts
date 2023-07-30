import { CourseClass } from '../course-classes/course-class';
import { Course } from '../courses/course';
import { Employee } from '../employees/employee';
import { Impediment } from '../impediments/impediment';
import { Pole } from '../poles/pole';
import { Qualification } from '../qualifications/qualification';
import { Role } from '../roles/role';

export interface Bond {
  id: number;
  employee: Employee;
  role: Role;
  volunteer: boolean;
  hiringProcess: string;
  begin: string;
  terminatedAt: string;
  course: Course | null;
  courseClass: CourseClass | null;
  impediments: Impediment[] | null;
  pole: Pole | null;
  qualification: Qualification;
  createdAt: string;
  updatedAt: string;
  hasOpenImpediments?: boolean;
}
