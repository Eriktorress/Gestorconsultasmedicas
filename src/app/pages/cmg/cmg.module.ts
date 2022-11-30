import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmgPageRoutingModule } from './cmg-routing.module';

import { CmgPage } from './cmg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmgPageRoutingModule
  ],
  declarations: [CmgPage]
})
export class CmgPageModule {}
