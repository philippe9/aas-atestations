import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  should_login = false;
  userUpdated(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    Swal.fire(
      'Compte enregistré',
      'Vous allez etre rediriger vers votre espace user',
      'info'
    )
  }
}
