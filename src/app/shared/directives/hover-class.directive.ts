import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lbmHoverClass]'
})
export class HoverClassDirective {

  constructor(public elementRef: ElementRef) { }
  @Input('lbmHoverClass') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
