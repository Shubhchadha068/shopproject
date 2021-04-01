import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApbrushComponent } from './apbrush.component';

describe('ApbrushComponent', () => {
  let component: ApbrushComponent;
  let fixture: ComponentFixture<ApbrushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApbrushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApbrushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
