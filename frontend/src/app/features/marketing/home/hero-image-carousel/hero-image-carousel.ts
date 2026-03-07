import { Component, signal, OnDestroy, afterNextRender } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { ImageInfo } from '@core/models/image-info.model';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-hero-image-carousel',
  imports: [NgOptimizedImage, NgClass, NgIcon],
  templateUrl: './hero-image-carousel.html',
  styleUrl: './hero-image-carousel.scss',
})
export class HeroImageCarousel implements OnDestroy {
  images: ImageInfo[] = [
    { url: 'images/hero-carousel/hero-carousel-1.webp', alt: 'Carousel image 1' },
    { url: 'images/hero-carousel/hero-carousel-2.webp', alt: 'Carousel image 2' },
    { url: 'images/hero-carousel/hero-carousel-3.webp', alt: 'Carousel image 3' },
  ];
  benefits: string[] = ['3 Free Classes', 'No Contract', 'No Fees'];

  currentIndex = signal<number>(0);
  private timer: any;

  constructor() {
    afterNextRender(() => {
      this.startAutoCycle();
    });
  }

  startAutoCycle() {
    this.timer = setInterval(() => {
      this.currentIndex.update((index) => (index + 1) % this.images.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
