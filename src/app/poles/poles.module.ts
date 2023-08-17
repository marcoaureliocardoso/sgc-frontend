import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PoleCreateComponent } from './pole-create/pole-create.component';
import { PoleListComponent } from './pole-list/pole-list.component';
import { PoleUpdateComponent } from './pole-update/pole-update.component';
import { PoleComponent } from './pole/pole.component';
import { PolesRoutingModule } from './poles-routing.module';

@NgModule({
  declarations: [
    PoleComponent,
    PoleCreateComponent,
    PoleListComponent,
    PoleUpdateComponent,
  ],
  imports: [CommonModule, PolesRoutingModule],
})
export class PolesModule {}
