import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[wbOutsideClick]'
})
export class OutsideClickDirective {
  @Output() outsideClick = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:mousedown', ['$event']) onClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.outsideClick.emit(event);
    }
  }

}
