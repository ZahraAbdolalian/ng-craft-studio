import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPreviewStage } from './button-preview-stage';

describe('ButtonPreviewStage', () => {
  let component: ButtonPreviewStage;
  let fixture: ComponentFixture<ButtonPreviewStage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPreviewStage],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPreviewStage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
