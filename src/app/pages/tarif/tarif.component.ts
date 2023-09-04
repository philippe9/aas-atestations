import { Component } from '@angular/core';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent {
  actualAss = ''
  selectedAssurance(item: string) {
    this.actualAss = item;
  }
}
