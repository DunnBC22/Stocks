import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStatementComponent } from './income-statement.component';

describe('IncomeStatementComponent', () => {
  let component: IncomeStatementComponent;
  let fixture: ComponentFixture<IncomeStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
