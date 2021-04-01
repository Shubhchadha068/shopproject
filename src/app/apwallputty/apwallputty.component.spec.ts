import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApwallputtyComponent } from './apwallputty.component';

describe('ApwallputtyComponent', () => {
  let component: ApwallputtyComponent;
  let fixture: ComponentFixture<ApwallputtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApwallputtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApwallputtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
