import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdpPageRoutingModule } from './adp-routing.module';

import { AdpPage } from './adp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdpPageRoutingModule
  ],
  declarations: [AdpPage]
})
export class AdpPageModule {}
