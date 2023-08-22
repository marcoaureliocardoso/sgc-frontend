import { Component, inject } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  public employeeList: Employee[] = [];
  private employeeService: EmployeeService = inject(EmployeeService);

  constructor() {
    this.getEmployeeList();
  }

  async getEmployeeList(): Promise<void> {
    let response: any = await this.employeeService.getEmployeeListPage();
    this.employeeList = await response.content;
  }
}
