import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscCashFlowComponent } from './disc-cash-flow.component';

describe('DiscCashFlowComponent', () => {
  let component: DiscCashFlowComponent;
  let fixture: ComponentFixture<DiscCashFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscCashFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
