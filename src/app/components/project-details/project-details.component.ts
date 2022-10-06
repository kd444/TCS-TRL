import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  routeToAssessmentReviewPage(){    
    this.router.navigate(["/assessment-review"]);
  }

}
