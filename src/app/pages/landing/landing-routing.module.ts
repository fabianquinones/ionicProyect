import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';
import { AsistenciasComponent } from 'src/app/componentes/asistencias/asistencias.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    children :[{
      path: 'asistencias',
      component: AsistenciasComponent
  }]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
