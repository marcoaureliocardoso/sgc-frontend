import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RoleComponent } from './role/role.component';
import { RolesRoutingModule } from './roles-routing.module';

@NgModule({
  declarations: [
    RoleComponent,
    RoleCreateComponent,
    RoleListComponent,
    RoleUpdateComponent,
  ],
  imports: [CommonModule, RolesRoutingModule],
})
export class RolesModule {}
