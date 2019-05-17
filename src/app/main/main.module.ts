import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutingModule } from  './main-routing.module';
import { MainComponent } from './main.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { ComisionadoComponent } from './comisionado/comisionado.component';
import { CoordinacionComponent } from './coordinacion/coordinacion.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { MisionComponent } from './mision/mision.component';
import { SlideComponent } from './slide/slide.component';
import { TramitesComponent } from './tramites/tramites.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';


@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    CardsComponent,
    ComisionadoComponent,
    CoordinacionComponent,
    FooterComponent,
    InicioComponent,
    MenuNavComponent,
    MisionComponent,
    SlideComponent,
    TramitesComponent,
    TransparenciaComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    MainRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
