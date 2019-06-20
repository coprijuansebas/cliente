import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service'



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private service: ImagesService) { }

  imagenes: any = [];


  ngOnInit() {
    this.getImagenes();
  }

  getImagenes(){
    this.service.getImagesb().subscribe(
      res => {
        this.imagenes = res;
      },
      err => console.error(err),
    );
  }

}
