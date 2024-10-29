import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineBillComponent } from './medicine-bill.component';

describe('MedicineBillComponent', () => {
  let component: MedicineBillComponent;
  let fixture: ComponentFixture<MedicineBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
