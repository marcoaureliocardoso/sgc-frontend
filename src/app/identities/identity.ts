import { DocumentType } from "../document-types/document-type";

export interface Identity {
    id: number;
    documentType: DocumentType;
    number: string;
    issueDate: string;
    issuer: string;
    issuerState: string;
    createdAt: string;
    updatedAt: string;
}
