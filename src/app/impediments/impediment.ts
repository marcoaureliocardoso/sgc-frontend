import { Bond } from '../bonds/bond';
import { User } from '../users/user';

export interface Impediment {
    id: number;
    bond: Bond;
    description: string;
    rewier: User;
    closedBy: User;
    closedAt: string;
    createdAt: string;
    updatedAt: string;
}
