import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProfileComponent } from './stock-profile.component';

describe('StockProfileComponent', () => {
  let component: StockProfileComponent;
  let fixture: ComponentFixture<StockProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
