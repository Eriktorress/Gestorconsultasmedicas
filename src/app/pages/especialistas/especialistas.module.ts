import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistasPageRoutingModule } from './especialistas-routing.module';

import { EspecialistasPage } from './especialistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistasPageRoutingModule
  ],
  declarations: [EspecialistasPage]
})
export class EspecialistasPageModule {}
