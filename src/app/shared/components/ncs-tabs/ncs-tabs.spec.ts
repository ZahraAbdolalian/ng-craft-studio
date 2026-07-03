import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcsTabs } from './ncs-tabs';

describe('NcsTabs', () => {
  let component: NcsTabs;
  let fixture: ComponentFixture<NcsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(NcsTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
