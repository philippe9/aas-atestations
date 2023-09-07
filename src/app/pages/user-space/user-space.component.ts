import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss']
})
export class UserSpaceComponent implements OnInit {
  products = [];
  user: any;
  visible = false;
  actualPass = '';
  confirmPass = '';
  selectedMenu = 'myInfo';
  filterCompta = {
    date_debut: new Date(),
    date_fin: new Date()
  }
  accountForm!: FormGroup;
  userAdresses: Array<any> = [];
  commandes: Array<any> = [];

  constructor(private readonly fb: FormBuilder, public router: Router) {
  }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      nom: ['Philippe', [Validators.required, Validators.minLength(2)]],
      prenom: ['Steve', [Validators.required, Validators.minLength(2)]],
      email_user: ['philippesteve@atos.net', [Validators.email]],
      date_naissance: [''],
      password_user: ['', [Validators.required, Validators.minLength(5)]],
      confirmPass: ['', [Validators.required, Validators.minLength(5)]]
    });
    // if (UserHelper.isConnect()) {
    //   this.user = UserHelper.getUser() as User;
    //   this.userService.getUserAdresses({ id_user: UserHelper.getUserId() }).subscribe((data) => {
    //     console.log(data)
    //     if (data) {
    //       this.userAdresses = data;
    //     }
    //   });
    //   this.commandesService.getUserCommandes({ id_user: UserHelper.getUserId() }).subscribe(data => this.commandes = data);
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

  navigateToMenu(selectedMenu: string): void {
    this.selectedMenu = selectedMenu;
  }
  onSubmit(form: FormGroup): void {
    console.log(form);
  }
  openModalAdresseLivraison(a?: any) {
    // this.ref = super.showDialog(DeliveryAdresseComponent, "Config de l'adresse, merci de remplir le formulaire ci-dessous.", Dialog.CREATION, { adresse: a ? a : null });
    // this.ref.onClose.subscribe(async (adresse: Adresse) => {
    //   console.log(adresse);
    //   if (adresse) {
    //     const exist = this.userAdresses.findIndex(el => el.id_adresse === el.id_adresse);
    //     if (exist === -1) {
    //       this.userAdresses.push(adresse);
    //     } else {
    //       this.userAdresses[exist] = adresse;
    //     }
    //   }
    // }
    // )
  }
  logout() {
    // UserHelper.logoutUser();
    this.router.navigate(['/']);
  }
}
