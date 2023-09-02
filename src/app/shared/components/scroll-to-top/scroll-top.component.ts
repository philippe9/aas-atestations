import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {
  windowScrolled = false;
  topOffset = 150; // Top offset to display scroll to top button

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset > this.topOffset ||
      document.documentElement.scrollTop > this.topOffset ||
      document.body.scrollTop > this.topOffset
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

}
