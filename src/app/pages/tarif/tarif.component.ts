import { Component } from '@angular/core';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent {
  actualAss = '';
  assurance = {
    carName: '',
    carModel: '',
    fuel: '',
    seats: 4,
    fiscalPower: 7,
    carAge: '',
    circulationDate: '',
    newCarPrice: '',
    actualCarPrice: '',
    assurer: '',
    periode: 1
  }
  selectedMonth = 1;
  sidebarNewArticle = false;
  subscribeModal = false;
  cities = [
    { name: '1 mois', value: 1 },
    { name: '3 mois', value: 3 },
    { name: '6 mois', value: 6 },
    { name: '1 an', value: 12 },
  ];
  choice = '';
  ngOnInit(): void {
    const assurance = localStorage.getItem('assurance')
    // localStorage.getItem('user');
    if (assurance) {
      this.assurance = JSON.parse(assurance);
    }

  }
  selectedAssurance(item: string) {
    this.actualAss = item;
  }
  selectMeans(choice: string) {
    this.subscribeModal = false
    this.choice = choice;
  }
}
