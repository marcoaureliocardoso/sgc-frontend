import { Employee } from "../employees/employee";

export interface Phone {
    id: number;
    employee: Employee;
    areaCode: string;
    number: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}
