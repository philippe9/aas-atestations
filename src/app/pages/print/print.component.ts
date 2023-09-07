import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  printmode = false;
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
    immatriculation: '',
    periode: 1,
    date_debut: '',
    date_fin: '',
  }
  user = JSON.parse(localStorage.getItem('user') || '{}');
  ngOnInit(): void {
    const assurance = localStorage.getItem('assurance')
    // localStorage.getItem('user');
    if (assurance) {
      this.assurance = JSON.parse(assurance);
    }
  }
  printMedia() {
    this.printmode = true;

    window.onafterprint = function () {
      window.location.href = 'http://localhost:4200/user-space';
    }
    setTimeout(() => {
      window.print();
    }, 100)
  }
}
