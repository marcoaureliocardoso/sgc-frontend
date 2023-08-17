import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentCreateComponent } from './document-create/document-create.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  { path: '', component: DocumentListComponent },
  { path: 'create', component: DocumentCreateComponent },
  { path: 'update/:id', component: DocumentUpdateComponent },
  { path: ':id', component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
