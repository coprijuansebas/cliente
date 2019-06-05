import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.scroll();
    this.regresar();
  }

  regresar(){
    const current = this.router.url;
    if(current === '/main/tramites'){

    }
    if(current === '/main/coordinacion'){
      return
    }
    if(current === '/main/transparencia'){
      return
    }
    if(current === '/main/mision'){
      return
    }
    else if(current === '/main'){
      this.router.navigate(['/main']);
    }
  }


  //Scroll para las secciones en la pagina main
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
