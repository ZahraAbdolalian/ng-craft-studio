import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPageLayout } from './generator-page-layout';

describe('GeneratorPageLayout', () => {
  let component: GeneratorPageLayout;
  let fixture: ComponentFixture<GeneratorPageLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratorPageLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorPageLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
