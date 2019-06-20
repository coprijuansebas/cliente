import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { RegistrarService } from '../registrar/registrar.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private service: RegistrarService) { }

  intercept(req, next){
    // let service = this.injector.get(RegistrarService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.service.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }

}
