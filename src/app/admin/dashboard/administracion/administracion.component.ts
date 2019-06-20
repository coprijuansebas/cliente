import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ImagesService } from '../../../services/images/images.service';





const url = 'http://localhost:5000/api/imagenes/upload';
const urlb = 'http://localhost:5000/api/imagenes/banner';
const urlc = 'http://localhost:5000/api/imagenes/conocenos';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  imagenes: any = [];
  imagenesb: any = [];
  imagenesc: any = [];

  uploader: FileUploader = new FileUploader({url:url});
  uploaderb: FileUploader = new FileUploader({url:urlb});
  uploaderc: FileUploader = new FileUploader({url:urlc});

  attachmentList: any = [];
  attachmentListb: any = [];
  attachmentListc: any = [];

  constructor(private service: ImagesService) {

    this.uploader.onCompleteItem = (item:any, response:any, status:any, header:any) => {
      this.attachmentList.push(JSON.parse(response));
    }
    this.uploaderb.onCompleteItem = (item:any, response:any, status:any, header:any) => {
      this.attachmentListb.push(JSON.parse(response));
    }
    this.uploaderc.onCompleteItem = (item:any, response:any, status:any, header:any) => {
      this.attachmentListc.push(JSON.parse(response));
    }
    
   }

  ngOnInit() {
    this.getImagenes();
    this.getImagenesb();
    this.getImagenesc();
  }

  getImagenes(){
    this.service.getImages().subscribe(
      res => {
        this.imagenes = res;
      },
      err => console.error(err),
    );
  }

  getImagenesb(){
    this.service.getImagesb().subscribe(
      res => {
        this.imagenesb = res;
      },
      err => console.error(err),
    );
  }

  getImagenesc(){
    this.service.getImagesc().subscribe(
      res => {
        this.imagenesc = res;
      },
      err => console.error(err),
    );
  }

  deleteImage(id: string){
    this.service.deleteImage(id).subscribe(
      res => {
        console.log(res);
        this.getImagenes();
      },
      err => console.error(err)
    )
  }

}
