import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit, OnDestroy {
  accountForm!: FormGroup;
  @Output() userUpdated = new EventEmitter<any>();
  private $destroy = new Subject<void>();
  displayError = false;
  errorMessage = ''
  constructor(
    private readonly fb: FormBuilder,
  ) {
  }
  ngOnInit(): void {
    this.accountForm = this.fb.group({
      email_user: ['', [Validators.email, Validators.required]],
      password_user: ['', [Validators.required]]
    });
    this.accountForm.markAllAsTouched();
  }
  onSubmit(form: FormGroup): void {
    console.log(form);
    // if (form.status === 'VALID') {

    // } else {
    //   this.displayError = true;
    //   this.errorMessage = "Veuillez remplir tous les champs du formulaire correctement";
    // }
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
