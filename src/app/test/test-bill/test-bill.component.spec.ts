import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBillComponent } from './test-bill.component';

describe('TestBillComponent', () => {
  let component: TestBillComponent;
  let fixture: ComponentFixture<TestBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
