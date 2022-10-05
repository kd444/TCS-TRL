import { surveyQuestion } from "./../../interfaces/surveyQuestion";
import { MainService } from "src/app/services/main.service";

import { Component, OnInit } from "@angular/core";
import {
  faChevronRight,
  faUser,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { User } from "src/app/interfaces/user";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.css"],
})
export class UserHomeComponent implements OnInit {
  faChevronRight = faChevronRight;
  faUser = faUser;
  faCog = faCog;
  patientName: string;
  loggedInPatient: User;

  allowTriageQuestionsRouting: boolean = true;
  displaySuccessPopOver: boolean = false;

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    this.loggedInPatient = this.mainService.getLoggedInUser();
    this.patientName = this.mainService.getLoggedInUser()?.firstName;
    //this.allowTriageQuestionsRouting  = this.loggedInPatient.surveyData ? false : true;
    //this.mainService.getHideShowScreeingPopOver().subscribe(boolVal=>this.displaySuccessPopOver = boolVal);
  }

  routeToProfile() {
    // this.router.navigate(["/my-profile"],{ queryParams: { path : "home"}});
    // routerLink="/my-profile"
  }

  routeToScreeing() {
    console.log("befor condition");
    if (this.allowTriageQuestionsRouting) {
      console.log("routing");

      this.router.navigate(["/project-registration"]);
    }
  }
  closeModal() {
    this.mainService.setHideShowScreeingPopOver(false);
  }
}
