import { Injectable } from '@angular/core';
import { User } from '../../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  API_URI = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  //Trae todos los usuarios de la base de datos
  getUsers(){
    return this.http.get(`${this.API_URI}/registrar`);
  }

  //Trae un usuario de la base de datos
  getUser(id: string) {
    return this.http.get(`${this.API_URI}/registrar/${id}`);
  }

  //Borra un usuario de la base de datos usando REST APIs
  deleteUser(id: string) {
    return this.http.delete(`${this.API_URI}/registrar/${id}`);
  }

  //Guarda un usuario en la base de datos
  saveUser(user: User) {
    return this.http.post(`${this.API_URI}/registrar`, user);
  }

  //Actualiza la informacion de un usuario en la base de datos
  updateUser(id: string|number, updatedUser: User): Observable<User> {
    return this.http.put(`${this.API_URI}/registrar/${id}`, updatedUser);
  }

  loginUser(user: User) {
    return this.http.post(`${this.API_URI}/login`, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
