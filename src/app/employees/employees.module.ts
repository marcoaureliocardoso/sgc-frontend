import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
  ],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
