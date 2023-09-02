import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSpaceRoutingModule } from './user-space-routing.module';
import { UserSpaceComponent } from './user-space.component';


@NgModule({
  declarations: [
    UserSpaceComponent
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule
  ]
})
export class UserSpaceModule { }
