import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-details',
  templateUrl: './assessment-details.component.html',
  styleUrls: ['./assessment-details.component.css']
})
export class AssessmentDetailsComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  routeToAssessmentDetail(){    
    this.router.navigate(["/project-details"]);
  }
}
