import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  accountForm!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email, Validators.required,]],
      phone: ['', [Validators.required, Validators.minLength(5)]],
      // orderId: ['', [Validators.minLength(5)]],
      message: ['', [Validators.minLength(5)]]
    });
  }
  onSubmit(form: FormGroup): void {
    console.log(form)
  }
}

