import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';
import { AnalisisComponent } from './dashboard/analisis/analisis.component';
import { AdministracionComponent } from './dashboard/administracion/administracion.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';


import { HttpClientModule } from '@angular/common/http'
import { TramitesService } from '../services/tramites/tramites.service';
import { TablasComponent } from './dashboard/analisis/tablas/tablas.component';
import { IngresarComponent } from './dashboard/analisis/ingresar/ingresar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    UsuariosComponent,
    AnalisisComponent,
    AdministracionComponent,
    SidebarComponent,
    NavbarComponent,
    TablasComponent,
    IngresarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    TramitesService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
