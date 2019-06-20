import { Component, OnInit, HostBinding } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar/registrar.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private service: RegistrarService) { }

  // @HostBinding('class') classes = 'row';

  usuarios: any = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }

  deleteUser(id: string){
    this.service.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.error(err)
    )
  }

}
