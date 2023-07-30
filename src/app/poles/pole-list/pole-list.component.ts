import { Component, inject } from '@angular/core';
import { Pole } from '../pole';
import { PoleService } from '../pole.service';

@Component({
  selector: 'app-pole-list',
  templateUrl: './pole-list.component.html',
  styleUrls: ['./pole-list.component.css'],
})
export class PoleListComponent {
  public poleList: Pole[] = [];
  private poleService: PoleService = inject(PoleService);

  constructor() {
    this.getPoleList();
  }

  async getPoleList(): Promise<void> {
    this.poleList = await this.poleService.getPoleList();
  }
}
