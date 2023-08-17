import { Course } from '../courses/course';
import { UserType } from '../user-types/user-type';
import { User } from '../users/user';

export interface Responsibility {
    id: number;
    user: User;
    userType: UserType;
    course: Course;
    begin: string;
    end: string;
    createdAt: string;
    updatedAt: string;
}
