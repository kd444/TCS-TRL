import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-assessment-report-level-cleared',
  templateUrl: './assessment-report-level-cleared.component.html',
  styleUrls: ['./assessment-report-level-cleared.component.css']
})
export class AssessmentReportLevelClearedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToHome() {
    this.router.navigate(["/user-home"]);
  }
}
