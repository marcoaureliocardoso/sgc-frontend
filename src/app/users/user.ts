import { Employee } from "../employees/employee";

export interface User {
    id: number;
    login: string;
    active: boolean;
    emailVerifiedAt: string;
    employee: Employee;
    createdAt: string;
    updatedAt: string;
}
