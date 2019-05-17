import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { InicioComponent } from './inicio/inicio.component';
import { TramitesComponent } from './tramites/tramites.component';
import { CoordinacionComponent } from './coordinacion/coordinacion.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { MisionComponent } from './mision/mision.component';



const routes: Routes = [
    { path: 'main', 
      component: MainComponent,
      children: [
          { path: '', component: InicioComponent },
          { path: 'inicio', component: InicioComponent },
          { path: 'tramites', component: TramitesComponent },
          { path: 'coordinacion', component: CoordinacionComponent },
          { path: 'transparencia', component: TransparenciaComponent },
          { path: 'mision', component: MisionComponent },
      ] }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }