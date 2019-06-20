import { Injectable } from '@angular/core';
import { Images } from '../../Models/images';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  API_URI = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  //Trae todas las imagenes de la base de datos
  // CAROUSEL
  getImages(){
    return this.http.get(`${this.API_URI}/imagenes`);
  }

  // BANNER
  getImagesb(){
    return this.http.get(`${this.API_URI}/imagenes/banner`);
  }
  
  // CONOCENOS
  getImagesc(){
    return this.http.get(`${this.API_URI}/imagenes/conocenos`);
  }

  //Trae una imagen de la base de datos
  getImage(id: string) {
    return this.http.get(`${this.API_URI}/imagenes/${id}`);
  }

  //Borra una imagen de la base de datos usando REST APIs
  deleteImage(id: string) {
    return this.http.delete(`${this.API_URI}/imagenes/${id}`);
  }

  //Guarda una imagen en la base de datos
  saveImage(imagen: Images) {
    return this.http.post(`${this.API_URI}/imagenes/upload`, imagen);
  }

  //Actualiza una imagen en la base de datos
  updateImage(id: string|number, updatedImage: Images): Observable<Images> {
    return this.http.put(`${this.API_URI}/imagenes/${id}`, updatedImage);
  }
}
