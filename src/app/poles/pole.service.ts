import { Injectable } from '@angular/core';

import { API_POLES } from '../app.api';
import { Pole } from './pole';

@Injectable({
  providedIn: 'root',
})
export class PoleService {
  private url = API_POLES;

  constructor() {}

  async getPoleList(): Promise<Pole[]> {
    const response = await fetch(this.url);
    return await response.json();
  }
}
