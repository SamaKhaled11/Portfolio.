import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exper } from './exper';

describe('Exper', () => {
  let component: Exper;
  let fixture: ComponentFixture<Exper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
