import { Course } from "../courses/course";
import { Pole } from "../poles/pole";
import { Role } from "../roles/role";

export interface Applicant {
    id: number;
    name: string;
    email: string;
    areaCode: string;
    landline: string;
    mobile: string;
    hiringProcess: string;
    role: Role;
    pole: Pole | null;
    course: Course | null;
    callState: string;
    createdAt: string;
    updatedAt: string;
}
