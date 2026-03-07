import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCoyote } from './why-coyote';

describe('WhyCoyote', () => {
  let component: WhyCoyote;
  let fixture: ComponentFixture<WhyCoyote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyCoyote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyCoyote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
