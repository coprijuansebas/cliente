import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service'


@Component({
  selector: 'app-comisionado',
  templateUrl: './comisionado.component.html',
  styleUrls: ['./comisionado.component.css']
})
export class ComisionadoComponent implements OnInit {

  constructor(private service: ImagesService) { }

  imagenes: any = [];


  ngOnInit() {
    this.getImagenes();
  }

  getImagenes(){
    this.service.getImagesc().subscribe(
      res => {
        this.imagenes = res;
      },
      err => console.error(err),
    );
  }

}
