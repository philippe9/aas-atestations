import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './module/prime-ng.module.';

import { DialogService } from 'primeng/dynamicdialog';
import { HoverClassDirective } from './directives/hover-class.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScrollTopComponent } from './components/scroll-to-top/scroll-top.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { RegistrationCardComponent } from './components/registration-card/registration-card.component';

// import { UserService } from '@core/services/user.service';
const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PrimeNgModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  ScrollTopComponent,
  LoginCardComponent,
  RegistrationCardComponent
];
const PIPES: any[] = [];
const DIRECTIVES: any[] = [HoverClassDirective];
@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES, ...BASE_MODULES],
  imports: [...BASE_MODULES],
  providers: [DialogService]
})
export class SharedModule { }
