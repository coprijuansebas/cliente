import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service'

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor(private service: ImagesService) { }

  imagenes: any = [];

  ngOnInit() {
    this.getImagenes();
  }

  getImagenes(){
    this.service.getImages().subscribe(
      res => {
        this.imagenes = res;
      },
      err => console.error(err),
    );
  }

}
