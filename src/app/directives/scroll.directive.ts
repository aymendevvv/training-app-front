import { Directive , HostListener} from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Check if the user has scrolled down, then hide the div
    console.log('scrolling');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const elementToHide = document.getElementById('upper-header');

    // Change 100 to the desired scroll position
    if (scrollPosition > 50 && elementToHide) {

      elementToHide.style.display = 'none';
    } 
  }
  constructor() { }

}
