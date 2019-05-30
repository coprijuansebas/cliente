import { Component, OnInit } from '@angular/core';
import { Tramite } from 'src/app/Models/Tramite';
import { Router } from '@angular/router';

import { TramitesService } from '../../../../services/tramites/tramites.service'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  tramite: Tramite = {
    id: 0,
    scian: 0,
    descripcion: '',
    area: '',
    entidadesF: '',
    cofepris: '',
    Rlicencia: '',
    creado_a: new Date()

  };

  constructor(private tramitesService: TramitesService, private router: Router) { }

  ngOnInit() {
  }

  guardarTramite(){
    delete this.tramite.id;
    delete this.tramite.creado_a;

    this.tramitesService.saveTramite(this.tramite).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/dashboard/analisis/tablas']);
      },
      err => console.error(err)
    );
  }

}
