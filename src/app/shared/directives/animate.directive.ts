import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';
import { AnimationMetadata, AnimationPlayer, AnimationBuilder, AnimationFactory, style, animate } from '@angular/animations';

@Directive({
  selector: '[wbAnimate]'
})
export class AnimateDirective implements AfterViewInit {
  @Input() animateInAnimation: AnimationMetadata | AnimationMetadata[];

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.animate();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.animate();
  }

  private animated = false;
  private player: AnimationPlayer;

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngAfterViewInit(): void {
    this.init();
    this.animate();
  }

  private init(): void {
    let animation: AnimationFactory;
    if (this.animateInAnimation) {
      animation = this.animationBuilder.build(this.animateInAnimation);
    } else {
      animation = this.animationBuilder.build([
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]);
    }
    this.player = animation.create(this.el.nativeElement);
    this.player.init();
  }

  private animate(): void {
    const inView = this.isInViewport();
    if (!inView || this.animated) {
      return;
    }
    this.player.play();
    this.animated = true;
  }

  private isInViewport(): boolean {
    const elementCoordinates = this.el.nativeElement.getBoundingClientRect();
    const top = elementCoordinates.top - (window.innerHeight || document.documentElement.clientHeight);
    const bottom = elementCoordinates.top + elementCoordinates.height;
    return top < 0 && bottom > 0;
  }

}
