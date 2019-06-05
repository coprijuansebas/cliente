import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {


  ngOnInit() {
  }

  mostrarTramite: boolean = true;
  mostrarTramite2: boolean = false;
  mostrarTramite3: boolean = false;
  mostrar(){
    this.mostrarTramite = true;
    this.mostrarTramite2 = false;
    this.mostrarTramite3 = false;
  }

  mostrar2(){
    this.mostrarTramite = false;
    this.mostrarTramite2 = true;
    this.mostrarTramite3 = false;
  }
  mostrar3(){
    this.mostrarTramite = false;
    this.mostrarTramite2 = false;
    this.mostrarTramite3 = true;
  }
}
