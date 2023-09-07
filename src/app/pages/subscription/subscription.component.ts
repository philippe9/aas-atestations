import { Component, OnInit } from '@angular/core';
import { carModels } from '@shared/data/cars';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  currentStep = 1;
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
    immatriculation: '',
    assurer: '',
    periode: 1
  }
  should_login = false;
  cars = carModels;
  showModelModal = false;
  carsModels: any = [];
  ngOnInit(): void {
    const assurance = localStorage.getItem('assurance')
    if (assurance) {
      this.assurance = JSON.parse(assurance);
    }

  }
  updateStep(step: number) {
    this.currentStep = step > 0 ? step : 1;
    localStorage.setItem('assurance', JSON.stringify(this.assurance));
  }
  selectedCarName() {
    this.showModelModal = true;
    const models = this.cars.find(el => el.brand === this.assurance.carName);

    this.carsModels = models?.models.map((el) => { return { brand: el } });
    console.log(this.carsModels);
  }
  userUpdated(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    Swal.fire(
      'Compte enregistré',
      'Votre compte a été enregistré vous pouvez procéder.',
      'info'
    )
  }
}
