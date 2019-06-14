import { Component, OnInit } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar/registrar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Users';

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
      res => {
        console.log(res)
        this.router.navigate(['/admin/dashboard']);
      },
      err => console.log(err)
    )
  }

}
