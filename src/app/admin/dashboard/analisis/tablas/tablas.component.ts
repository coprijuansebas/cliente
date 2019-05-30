import { Component, OnInit } from '@angular/core';
import { TramitesService } from 'src/app/services/tramites/tramites.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  constructor(private tramitesservice: TramitesService) { }

  tramites: any = [];

  ngOnInit() {
    this.getTramite();
  }

  getTramite(){
    this.tramitesservice.getTramites().subscribe(
      res => {
        this.tramites = res;
      },
      err => console.error(err),
    );
  }

  deleteTramite(id: string){
    this.tramitesservice.deleteTramite(id).subscribe(
      res => {
        console.log(res);
        this.getTramite();
      },
      err => console.error(err)
    )
  }

}
