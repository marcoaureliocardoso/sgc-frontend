import { Course } from "../courses/course";

export interface CourseClass {
    id: number;
    course: Course;
    code: string;
    name: string;
    cpp: string;
    createdAt: string;
    updatedAt: string;
}
