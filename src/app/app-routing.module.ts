import { LoginComponent } from "./components/login/login.component";
import { PatientDetailsComponent } from "./components/patient-details/patient-details.component";
import { ViewScreeningsComponent } from "./components/view-screenings/view-screenings.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AvailableCliniciansComponent } from "./components/available-clinicians/available-clinicians.component";
import { PatientHomeComponent } from "./components/patient-home/patient-home.component";
import { ClinicianHomeComponent } from "./components/clinician-home/clinician-home.component";
import { ScreeningComponent } from "./components/screening/screening.component";

import { PatientRegistrationComponent } from "./components/patient-registration/patient-registration.component";
//import {ClinicianRegistrationComponent} from './components/clinician-registration/clinician-registration.component';
//import { from } from 'rxjs';
import { UserRegistrationComponent } from "./components/user-registration/user-registration.component";
import { ReviewerHomeComponent } from "./components/reviewer-home/reviewer-home.component";
import { UserHomeComponent } from "./components/user-home/user-home.component";
import { AssessmentReportLevelClearedComponent } from "./components/assessment-report-level-cleared/assessment-report-level-cleared.component";
import { AssessmentReportLevelNotClearedComponent } from "./components/assessment-report-level-not-cleared/assessment-report-level-not-cleared.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "patient-home", component: PatientHomeComponent },
  { path: "screenings", component: ViewScreeningsComponent },
  { path: "clinician-home", component: ClinicianHomeComponent },
  { path: "available-clinicians", component: AvailableCliniciansComponent },
  { path: "my-profile", component: PatientDetailsComponent },
  { path: "patient-screening", component: ScreeningComponent },
  { path: "project-registration", component: PatientRegistrationComponent },
  { path: "user-registration", component: UserRegistrationComponent },
  { path: "reviewer-home", component: ReviewerHomeComponent },
  { path: "user-home", component: UserHomeComponent },
  { path: "report-cleared", component: AssessmentReportLevelClearedComponent },
  {
    path: "report-not-cleared",
    component: AssessmentReportLevelNotClearedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// /:id
