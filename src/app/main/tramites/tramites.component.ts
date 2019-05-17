import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
