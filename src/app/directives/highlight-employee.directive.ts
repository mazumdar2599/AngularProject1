

import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightEmployee]'
})
export class HighlightEmployeeDirective {

      constructor(private el: ElementRef) {
      }

      @HostListener('mouseenter') onMouseEnter() {
            this.highlight('gray');
      }

      @HostListener('mouseleave') onMouseLeave() {
            this.highlight('');
      }

      private highlight(color: string) {
            this.el.nativeElement.style.backgroundColor = color;
      }
}
