import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePanel } from './customize-panel';

describe('CustomizePanel', () => {
  let component: CustomizePanel;
  let fixture: ComponentFixture<CustomizePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
