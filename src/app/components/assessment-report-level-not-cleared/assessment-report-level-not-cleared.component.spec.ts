import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentReportLevelNotClearedComponent } from './assessment-report-level-not-cleared.component';

describe('AssessmentReportLevelNotClearedComponent', () => {
  let component: AssessmentReportLevelNotClearedComponent;
  let fixture: ComponentFixture<AssessmentReportLevelNotClearedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentReportLevelNotClearedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentReportLevelNotClearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
