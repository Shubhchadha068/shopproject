import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApwallpaintComponent } from './apwallpaint.component';

describe('ApwallpaintComponent', () => {
  let component: ApwallpaintComponent;
  let fixture: ComponentFixture<ApwallpaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApwallpaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApwallpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
