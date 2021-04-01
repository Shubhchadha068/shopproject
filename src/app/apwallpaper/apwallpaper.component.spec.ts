import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApwallpaperComponent } from './apwallpaper.component';

describe('ApwallpaperComponent', () => {
  let component: ApwallpaperComponent;
  let fixture: ComponentFixture<ApwallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApwallpaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApwallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
