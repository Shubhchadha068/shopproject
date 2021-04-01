import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcareComponent } from './smartcare.component';

describe('SmartcareComponent', () => {
  let component: SmartcareComponent;
  let fixture: ComponentFixture<SmartcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
