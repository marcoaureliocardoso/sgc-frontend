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
    // console.log(await response);

  const responseData = await response.json();
  // console.log(responseData);

  return responseData;
  }

  async getEmployeeListPage(page: number = 0, size: number = 10): Promise<Response> {
    const response: Response = await fetch(`${this.url}?page=${page}&size=${size}`);
    // console.log(await response);
    return await response.json();
  }
}
