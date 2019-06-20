import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //-- Toggle menu script--
    $("#menu-toggle").click(function (e){
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/admin'])
  }

}
