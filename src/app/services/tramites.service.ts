import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Tramite } from '../Models/Tramite'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  API_URI = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  //Trae todos los tramites de la base de datos
  getTramites(){
    return this.http.get(`${this.API_URI}/tramites`);
  }

  //Trae un tramite de la base de datos
  getTramite(id: string) {
    return this.http.get(`${this.API_URI}/tramites/${id}`);
  }

  //Borra un tramite de la base de datos usando REST APIs
  deleteTramite(id: string) {
    return this.http.delete(`${this.API_URI}/tramites/${id}`);
  }

  //Guarda un tramite en la base de datos
  saveTramite(tramite: Tramite) {
    return this.http.post(`${this.API_URI}/tramites`, tramite);
  }

  //Actualiza la informacion de un tramite en la base de datos
  updateTramite(id: string|number, updatedTramite: Tramite): Observable<Tramite> {
    return this.http.put(`${this.API_URI}/tramites/${id}`, updatedTramite);
  }


}
