import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HousePageRoutingModule } from './house-routing.module';

import { HousePage } from './house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HousePageRoutingModule
  ],
  declarations: [HousePage]
})
export class HousePageModule {}
