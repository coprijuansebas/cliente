import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //-- Toggle menu script--
    $("#menu-toggle").click(function (e){
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
  }

}
