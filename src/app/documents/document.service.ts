import { Injectable } from '@angular/core';

import { API_DOCUMENTS } from '../app.api';
import { Document } from './document';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private apiUrl = API_DOCUMENTS;

  constructor() {}

  async getDocumentList(): Promise<Document[]> {
    const response = await fetch(this.apiUrl);
    const documents: Document[] = await response.json();

    for (const document of documents) {
      const byteArray = this.base64ToByteArray(document.fileData!);
      const mimeType = await this.getBlobMimeType(byteArray);
      document.fileBlob = new Blob([byteArray], { type: mimeType });
      document.file = new File([document.fileBlob], document.fileName, { type: mimeType, lastModified: Date.parse(document.updatedAt) });

    }

    return documents;
  }

  private base64ToByteArray(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const length = binaryString.length;
    const byteArray = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }

    return byteArray;
  }

  private async getBlobMimeType(byteArray: Uint8Array): Promise<string> {
    const header = this.getByteArrayHeader(byteArray);

    switch (header) {
      case '89504e47':
        return 'image/png';
      case '47494638':
        return 'image/gif';
      case '25504446':
        return 'application/pdf';
      case 'ffd8ffe0':
      case 'ffd8ffe1':
      case 'ffd8ffe2':
        return 'image/jpeg';
      default:
        return 'unknown';
    }
  }

  private getByteArrayHeader(byteArray: Uint8Array): string {
    const headerBytes = byteArray.subarray(0, 4);

    // Convert each byte to its hexadecimal representation
    const header = headerBytes.reduce(
      (acc, byte) => acc + byte.toString(16),
      ''
    );

    return header;
  }
}
