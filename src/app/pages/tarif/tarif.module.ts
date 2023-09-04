import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarifRoutingModule } from './tarif-routing.module';
import { TarifComponent } from './tarif.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TarifComponent
  ],
  imports: [
    CommonModule,
    TarifRoutingModule,
    SharedModule
  ]
})
export class TarifModule { }
