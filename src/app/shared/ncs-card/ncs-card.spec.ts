import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcsCard } from './ncs-card';

describe('NcsCard', () => {
  let component: NcsCard;
  let fixture: ComponentFixture<NcsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(NcsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
