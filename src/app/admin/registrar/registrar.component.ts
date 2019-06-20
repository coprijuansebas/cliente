import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/Models/Users';
import { Router } from '@angular/router';

import { RegistrarService } from '../../services/registrar/registrar.service';
import { HttpBackend, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  user: User = {
    id: 0,
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    created_at: new Date()
  };

  constructor(private registrarServices: RegistrarService, private router: Router) { }

  ngOnInit() {
  }


  saveUser() {
    delete this.user.id;
    delete this.user.created_at;

    this.registrarServices.saveUser(this.user).subscribe(
      (res: any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/admin/dashboard']);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401){
            this.router.navigate(['/admin']);
          }
        }
        console.error(err)
      }
    );
  }
}
