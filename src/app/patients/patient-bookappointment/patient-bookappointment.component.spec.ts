import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBookAppointmentComponent } from './patient-bookappointment.component'; // Ensure this matches the component file name


describe('PatientBookappointmentComponent', () => {
  let component: PatientBookAppointmentComponent;
  let fixture: ComponentFixture<PatientBookAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBookAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
