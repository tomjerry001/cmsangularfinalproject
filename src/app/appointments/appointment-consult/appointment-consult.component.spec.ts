import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentConsultComponent } from './appointment-consult.component';

describe('AppointmentConsultComponent', () => {
  let component: AppointmentConsultComponent;
  let fixture: ComponentFixture<AppointmentConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
