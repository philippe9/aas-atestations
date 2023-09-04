import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSpaceRoutingModule } from './user-space-routing.module';
import { UserSpaceComponent } from './user-space.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    UserSpaceComponent
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule,
    SharedModule
  ]
})
export class UserSpaceModule { }
