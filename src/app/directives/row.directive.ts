import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRow]'
})
export class RowDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }
  /*@HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }*/
  changeColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
