import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTestComponent } from './appointment-test.component';

describe('AppointmentTestComponent', () => {
  let component: AppointmentTestComponent;
  let fixture: ComponentFixture<AppointmentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
