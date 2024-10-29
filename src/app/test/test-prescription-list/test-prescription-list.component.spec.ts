import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrescriptionListComponent } from './test-prescription-list.component';

describe('TestPrescriptionListComponent', () => {
  let component: TestPrescriptionListComponent;
  let fixture: ComponentFixture<TestPrescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPrescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPrescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
