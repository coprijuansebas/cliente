import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'coprised';
  ngOnInit(){
    $(document).ready(function() {
          
      var scrollLink = $('.scroll');
      
      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top - 35
        }, 1000 );
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
