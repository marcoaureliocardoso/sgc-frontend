import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResponsibilitiesRoutingModule } from './responsibilities-routing.module';
import { ResponsibilityCreateComponent } from './responsibility-create/responsibility-create.component';
import { ResponsibilityListComponent } from './responsibility-list/responsibility-list.component';
import { ResponsibilityUpdateComponent } from './responsibility-update/responsibility-update.component';
import { ResponsibilityComponent } from './responsibility/responsibility.component';

@NgModule({
  declarations: [
    ResponsibilityComponent,
    ResponsibilityCreateComponent,
    ResponsibilityListComponent,
    ResponsibilityUpdateComponent,
  ],
  imports: [
    CommonModule,
    ResponsibilitiesRoutingModule
  ]
})
export class ResponsibilitiesModule { }
