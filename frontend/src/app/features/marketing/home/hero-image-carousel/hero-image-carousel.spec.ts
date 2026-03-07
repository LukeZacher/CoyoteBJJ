import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageCarousel } from './hero-image-carousel';

describe('HeroImageCarousel', () => {
  let component: HeroImageCarousel;
  let fixture: ComponentFixture<HeroImageCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImageCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
