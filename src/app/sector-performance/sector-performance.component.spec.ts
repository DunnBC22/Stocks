import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPerformanceComponent } from './sector-performance.component';

describe('SectorPerformanceComponent', () => {
  let component: SectorPerformanceComponent;
  let fixture: ComponentFixture<SectorPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
