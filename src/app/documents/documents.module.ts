import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DocumentCreateComponent } from './document-create/document-create.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { DocumentComponent } from './document/document.component';
import { DocumentsRoutingModule } from './documents-routing.module';

@NgModule({
  declarations: [
    DocumentComponent,
    DocumentCreateComponent,
    DocumentListComponent,
    DocumentUpdateComponent,
  ],
  imports: [CommonModule, DocumentsRoutingModule],
})
export class DocumentsModule {}
