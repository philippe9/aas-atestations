import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent {
  actualAss = 'assurance_1';
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
    date_fin: ''
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
  basePrice = 35450;
  ngOnInit(): void {
    const assurance = localStorage.getItem('assurance')
    // localStorage.getItem('user');
    if (assurance) {
      this.assurance = JSON.parse(assurance);
    }
  }
  selectedAssurance(item: string) {
    this.actualAss = item;
    switch (this.actualAss) {
      case 'assurance_1':
        this.basePrice = 35450;
        break;
      case 'assurance_2':
        this.basePrice = 36450;
        break;
      case 'assurance_3':
        this.basePrice = 32450;
        break;
      case 'assurance_4':
        this.basePrice = 31450;
        break;

      default:
        break;
    }
    this.assurance.assurer = item;
  }
  selectMeans(choice: string) {
    this.subscribeModal = false
    this.choice = choice;
    Swal.fire({
      icon: 'success',
      title: `Paiement reussi !`,
      text: `Votre paiement s'est déroulé avec succès . Votre assurance vous sera envoyé par mail et un téléchargement d'une copie va se lancer dans un instant`,
      showConfirmButton: false,
      timer: 5000
    })
    setTimeout(() => {
      const date = new Date();
      this.assurance.date_debut = new Date().toLocaleDateString('en-GB');
      this.assurance.date_fin = new Date(date.setMonth(date.getMonth() + this.selectedMonth)).toLocaleDateString('en-GB');
      localStorage.setItem('assurance', JSON.stringify(this.assurance));

      window.location.href = 'http://localhost:4200/print';
    }, 5200)
  }
}
