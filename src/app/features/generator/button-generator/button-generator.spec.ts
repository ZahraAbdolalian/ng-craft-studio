import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGenerator } from './button-generator';

describe('ButtonGenerator', () => {
  let component: ButtonGenerator;
  let fixture: ComponentFixture<ButtonGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
