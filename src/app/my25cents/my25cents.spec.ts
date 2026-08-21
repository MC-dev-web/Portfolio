import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My25cents } from './my25cents';

describe('My25cents', () => {
  let component: My25cents;
  let fixture: ComponentFixture<My25cents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My25cents],
    }).compileComponents();

    fixture = TestBed.createComponent(My25cents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
