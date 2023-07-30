import { Component, inject } from '@angular/core';

import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent {
  public applicantList: Applicant[] = [];
  private applicantService: ApplicantService = inject(ApplicantService);

  constructor() {
    this.getApplicantList();
  }

  async getApplicantList() {
    this.applicantList = await this.applicantService.getApplicantList();
  }
}
