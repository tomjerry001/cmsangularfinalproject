import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientconsultationbillComponent } from './patientconsultationbill.component';

describe('PatientconsultationbillComponent', () => {
  let component: PatientconsultationbillComponent;
  let fixture: ComponentFixture<PatientconsultationbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientconsultationbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientconsultationbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
