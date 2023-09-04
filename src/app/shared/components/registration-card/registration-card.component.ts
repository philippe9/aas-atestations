import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.scss']
})
export class RegistrationCardComponent implements OnInit {
  accountForm!: FormGroup;
  @Output() userUpdated = new EventEmitter<any>();
  displayError = false;
  errorMessage = ''
  constructor(
    private readonly fb: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email_user: ['', [Validators.required, Validators.email]],
      password_user: ['', [Validators.required, Validators.minLength(5)]],
      // confirmPass: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.accountForm.markAllAsTouched();
  }
  onSubmit(form: FormGroup): void {
    console.log(form);
    localStorage.setItem('user', JSON.stringify(form.value));
    this.userUpdated.emit(form.value);
  }

}
