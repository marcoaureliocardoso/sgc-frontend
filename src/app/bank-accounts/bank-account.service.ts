import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private url = 'http://localhost:3000/bank-accounts';

  constructor() { }

  async getBankAccountList() {
    const response = await fetch(this.url);
    return await response.json();
  }
}
