import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistnavbarComponent } from './pharmacistnavbar.component';

describe('PharmacistnavbarComponent', () => {
  let component: PharmacistnavbarComponent;
  let fixture: ComponentFixture<PharmacistnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
