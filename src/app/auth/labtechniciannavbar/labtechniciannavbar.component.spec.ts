import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechniciannavbarComponent } from './labtechniciannavbar.component';

describe('LabtechniciannavbarComponent', () => {
  let component: LabtechniciannavbarComponent;
  let fixture: ComponentFixture<LabtechniciannavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechniciannavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechniciannavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
