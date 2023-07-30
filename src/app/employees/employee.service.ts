import { Injectable } from '@angular/core';

import { API_EMPLOYEES } from '../app.api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = API_EMPLOYEES;

  constructor() {}

  async getEmployeeList(): Promise<Employee[]> {
    const response = await fetch(this.url);
    return await response.json();
  }
}
