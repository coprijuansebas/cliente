import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';
import { AnalisisComponent } from './dashboard/analisis/analisis.component';
import { AdministracionComponent } from './dashboard/administracion/administracion.component';
import { TablasComponent } from './dashboard/analisis/tablas/tablas.component';
import { IngresarComponent } from './dashboard/analisis/ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';



const routes: Routes = [
    { path: 'admin', 
      component: AdminComponent,
      children: [
          { path: '', component: LoginComponent },
          { path: 'Login', component: LoginComponent },
          { path: 'registrar', component: RegistrarComponent },
          { path: 'dashboard', component: DashboardComponent,
            children: [
                {path: 'usuarios', component: UsuariosComponent},
                {path: 'analisis', component: AnalisisComponent,
                 children: [
                     {path: '', component: TablasComponent},
                     {path: 'tablas', component: TablasComponent},
                     {path: 'ingresar', component: IngresarComponent},
                 ]},
                {path: 'administracion', component: AdministracionComponent},
            ]}
      ] }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }