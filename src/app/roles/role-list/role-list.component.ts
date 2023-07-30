import { Component, inject } from '@angular/core';

import { Role } from '../role';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent {
  public roleList: Role[] = [];
  private roleService: RoleService = inject(RoleService);

  constructor() {
    this.getRoleList();
  }

  async getRoleList(): Promise<void> {
    this.roleList = await this.roleService.getRoleList();
  }
}
