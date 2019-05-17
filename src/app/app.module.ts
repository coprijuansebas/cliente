import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from  './app-routing.module';

import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    MainModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
