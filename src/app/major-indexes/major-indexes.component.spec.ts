import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorIndexesComponent } from './major-indexes.component';

describe('MajorIndexesComponent', () => {
  let component: MajorIndexesComponent;
  let fixture: ComponentFixture<MajorIndexesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorIndexesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
