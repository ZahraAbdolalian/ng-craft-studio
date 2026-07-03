import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStates } from './button-states';

describe('ButtonStates', () => {
  let component: ButtonStates;
  let fixture: ComponentFixture<ButtonStates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonStates],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonStates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
