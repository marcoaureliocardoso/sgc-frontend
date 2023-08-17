import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', component: RoleListComponent },
  { path: 'create', component: RoleCreateComponent },
  { path: 'update/:id', component: RoleUpdateComponent },
  { path: ':id', component: RoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
