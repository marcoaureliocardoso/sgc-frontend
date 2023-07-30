import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url = 'http://localhost:3000/addresses';

  constructor() { }

  async getAddressList() {
    const response = await fetch(this.url);
    return await response.json();
  }
}
