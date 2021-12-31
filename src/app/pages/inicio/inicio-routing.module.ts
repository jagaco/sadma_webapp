import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Ingresos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'Ingresos',
        loadChildren: () => import('./../../pages/ingresos/ingresos.module').then( m => m.IngresosPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
