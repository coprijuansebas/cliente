import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {


  ngOnInit() {
    this.scroll();
  }

  mostrarTramite: boolean = true;
  mostrarTramite2: boolean = false;
  mostrarTramite3: boolean = false;
  mostrar(){
    this.mostrarTramite = true;
    this.mostrarTramite2 = false;
    this.mostrarTramite3 = false;
  }

  mostrar2(){
    this.mostrarTramite = false;
    this.mostrarTramite2 = true;
    this.mostrarTramite3 = false;
  }
  mostrar3(){
    this.mostrarTramite = false;
    this.mostrarTramite2 = false;
    this.mostrarTramite3 = true;
  }

  scroll(){
    $(document).ready(function() {
          
      var scrollLink = $('.scroll');
      
      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: $(this.hash).offset().top - 35}, 1000 );
      });
      
      // Active link switching
      $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        scrollLink.each(function() {
          
          var sectionOffset = $(this.hash).offset().top - 40;
          
          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })
        
      })
    })
  }
}
