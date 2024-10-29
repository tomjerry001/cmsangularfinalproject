import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePrescriptionListComponent } from './medicine-prescription-list.component';

describe('MedicinePrescriptionListComponent', () => {
  let component: MedicinePrescriptionListComponent;
  let fixture: ComponentFixture<MedicinePrescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePrescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePrescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
