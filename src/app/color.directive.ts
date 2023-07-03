import { Directive, ElementRef, HostListener, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {

  constructor(private readonly el: ElementRef, public templateRef: TemplateRef<unknown>) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.changeColor('');
  }

  // @HostListener('mouseover') onMouseHover() {
  //   this.changeColor('red');
  // }

  private changeColor(color: string) {
    return this.el.nativeElement.style.color = color;
  }

}
