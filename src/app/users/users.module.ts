import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserListComponent,
    UserUpdateComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
