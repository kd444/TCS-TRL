import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentReportLevelClearedComponent } from './assessment-report-level-cleared.component';

describe('AssessmentReportLevelClearedComponent', () => {
  let component: AssessmentReportLevelClearedComponent;
  let fixture: ComponentFixture<AssessmentReportLevelClearedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentReportLevelClearedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentReportLevelClearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
