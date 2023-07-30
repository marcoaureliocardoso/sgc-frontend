import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  private url = 'http://localhost:3000/document-types';

  constructor() { }

  async getDocumentTypeList() {
    const response = await fetch(this.url);
    return await response.json();
  }
}
