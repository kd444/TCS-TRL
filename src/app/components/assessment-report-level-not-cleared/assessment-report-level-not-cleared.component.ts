import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-assessment-report-level-not-cleared',
  templateUrl: './assessment-report-level-not-cleared.component.html',
  styleUrls: ['./assessment-report-level-not-cleared.component.css']
})
export class AssessmentReportLevelNotClearedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToHome() {
    this.router.navigate(["/user-home"]);
  }
}
