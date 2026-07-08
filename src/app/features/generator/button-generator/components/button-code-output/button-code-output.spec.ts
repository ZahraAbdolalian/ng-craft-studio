import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCodeOutput } from './button-code-output';

describe('ButtonCodeOutput', () => {
  let component: ButtonCodeOutput;
  let fixture: ComponentFixture<ButtonCodeOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCodeOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCodeOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
