import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @Input() defaultColor = 'lightblue';
  @Input() highlightColor = 'purple';

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'purple');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = this.defaultColor;
  }

}
