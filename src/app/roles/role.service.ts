import { Injectable } from '@angular/core';

import { API_ROLES } from '../app.api';
import { Role } from './role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private url = API_ROLES;

  constructor() {}

  async getRoleList(): Promise<Role[]> {
    const response = await fetch(this.url);
    return await response.json();
  }
}
