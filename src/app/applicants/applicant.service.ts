import { Injectable } from '@angular/core';

import { API_APPLICANTS } from '../app.api';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  private url = API_APPLICANTS;

  constructor() {}

  async getApplicantList() {
    const response = await fetch(this.url);
    return await response.json();
  }
}
