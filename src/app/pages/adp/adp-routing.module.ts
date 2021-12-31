import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdpPage } from './adp.page';

const routes: Routes = [
  {
    path: '',
    component: AdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdpPageRoutingModule {}
