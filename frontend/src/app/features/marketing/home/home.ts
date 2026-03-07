import { Component } from '@angular/core';
import { HeroImageCarousel } from './hero-image-carousel/hero-image-carousel';
import { WhyCoyote } from './why-coyote/why-coyote';

@Component({
  selector: 'app-home',
  imports: [HeroImageCarousel, WhyCoyote],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
