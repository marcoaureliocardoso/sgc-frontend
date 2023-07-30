import { Injectable } from '@angular/core';

import { API_BONDS } from '../app.api';
import { Bond } from './bond';

@Injectable({
  providedIn: 'root',
})
export class BondService {
  private url = API_BONDS;

  constructor() {}

  async getBondList(): Promise<Bond[]> {
    const response = await fetch(this.url);
    return await response.json();
  }
}
