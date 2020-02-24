import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyMetricsComponent } from './key-metrics.component';

describe('KeyMetricsComponent', () => {
  let component: KeyMetricsComponent;
  let fixture: ComponentFixture<KeyMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
