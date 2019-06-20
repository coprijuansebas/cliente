import { Component, OnInit } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar/registrar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Users';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: RegistrarService, private router: Router) { }
  user: User = {
    id: 0,
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    created_at: new Date()
  };


  ngOnInit() {
  }

  loginUser(){
    this.login.loginUser(this.user).subscribe(
      (res:any) => {
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
    )
  }

}
