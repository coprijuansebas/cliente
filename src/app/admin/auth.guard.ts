import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { RegistrarService } from '../services/registrar/registrar.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private service: RegistrarService, private router: Router){}

  canActivate(): boolean {
    if(this.service.loggedIn()){
      return true
    }else {
      this.router.navigate(['/admin']);
      return false
    }
  }
  
}
