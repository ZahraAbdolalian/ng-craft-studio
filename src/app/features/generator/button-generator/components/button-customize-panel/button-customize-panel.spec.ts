import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCustomizePanel } from './button-customize-panel';

describe('ButtonCustomizePanel', () => {
  let component: ButtonCustomizePanel;
  let fixture: ComponentFixture<ButtonCustomizePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCustomizePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCustomizePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
