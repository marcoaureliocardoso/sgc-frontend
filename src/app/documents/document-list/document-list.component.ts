import { Component, inject } from '@angular/core';

import { Document } from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent {
  public documentList: Document[] = [];
  private documentService: DocumentService = inject(DocumentService);

  constructor() {
    this.getDocumentList();
  }

  async getDocumentList(): Promise<void> {
    this.documentList = await this.documentService.getDocumentList();
    this.documentList.forEach((element) => {
      element.fileUrl = URL.createObjectURL(element.file!);
    });
  }

  openInNewTab(file: File) {
    if (file) {
      const pdfUrl = URL.createObjectURL(file);
      window.open(pdfUrl, '_blank');
    }
  }
}
