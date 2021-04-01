import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorpaintComponent } from './doorpaint.component';

describe('DoorpaintComponent', () => {
  let component: DoorpaintComponent;
  let fixture: ComponentFixture<DoorpaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorpaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorpaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
