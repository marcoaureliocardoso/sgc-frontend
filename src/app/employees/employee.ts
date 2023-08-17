import { Address } from '../addresses/address';
import { BankAccount } from '../bank-accounts/bank-account';
import { Bond } from '../bonds/bond';
import { Identity } from '../identities/identity';
import { InstitutionalDetail } from '../institutional-details/institutional-detail';
import { PersonalDetail } from '../personal-details/personal-detail';
import { Phone } from '../phones/phone';
import { Spouse } from '../spouses/spouse';
import { User } from '../users/user';

export interface Employee {
    id: number;
    cpf: string;
    name: string;
    gender: string;
    email: string;
    address: Address | null;
    identity: Identity;
    personalDetail: PersonalDetail | null;
    spouse: Spouse;
    bankAccount: BankAccount;
    intitutionalDetail: InstitutionalDetail;
    users: User[] | null;
    bonds: Bond[] | null;
    phones: Phone[] | null;
    createdAt: string;
    updatedAt: string;
}
