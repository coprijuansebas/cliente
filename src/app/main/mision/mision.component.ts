import { Component, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
import * as $ from 'jquery';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent implements AfterViewInit {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  ngAfterViewInit() {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
  }


}
