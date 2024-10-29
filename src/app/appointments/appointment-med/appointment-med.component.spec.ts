import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentMedComponent } from './appointment-med.component';

describe('AppointmentMedComponent', () => {
  let component: AppointmentMedComponent;
  let fixture: ComponentFixture<AppointmentMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
