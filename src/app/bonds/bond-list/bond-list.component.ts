import { Component, inject } from '@angular/core';

import { Bond } from '../bond';
import { BondService } from '../bond.service';

@Component({
  selector: 'app-bond-list',
  templateUrl: './bond-list.component.html',
  styleUrls: ['./bond-list.component.css'],
})
export class BondListComponent {
  public bondList: Bond[] = [];
  private bondService: BondService = inject(BondService);

  constructor() {
    this.getBondList();
  }

  async getBondList(): Promise<void> {
    this.bondList = await this.bondService.getBondList();
    this.bondList.forEach((element) => {
      element.hasOpenImpediments =
        element.impediments?.filter(
          (impediment) => impediment.closedAt === null
        ).length != 0;
    });
  }
}
