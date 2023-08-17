import { Bond } from '../bonds/bond';
import { DocumentType } from '../document-types/document-type';

export interface Document {
    id: number;
    fileName: string;
    relatedType: string;
    related: Bond;
    documentType: DocumentType;
    createdAt: string;
    updatedAt: string;
    fileData?: string;
    fileBlob?: Blob;
    fileUrl?: string;
    file?: File;
}
