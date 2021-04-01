import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApwallkretexComponent } from './apwallkretex.component';

describe('ApwallkretexComponent', () => {
  let component: ApwallkretexComponent;
  let fixture: ComponentFixture<ApwallkretexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApwallkretexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApwallkretexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
