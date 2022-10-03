import { Patient } from "src/app/interfaces/patient";

import { Router } from "@angular/router";
import { surveyQuestion } from "./../../interfaces/surveyQuestion";
import { QuestionComponent } from "./question/question.component";

import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-screening",
  templateUrl: "./screening.component.html",
  styleUrls: ["./screening.component.css"],
})
export class ScreeningComponent implements OnInit {
  dataQA = {};
  tabId: number = 1;
  isShow: boolean = true;
  isShow1: boolean = true;
  isShow2: boolean = true;
  isShow3: boolean = true;
  isShow4: boolean = true;
  isShow5: boolean = true;
  isShow6: boolean = true;
  isShow7: boolean = true;
  isShow8: boolean = true;
  isShow9: boolean = true;
  showSurvey: boolean = false;
  showModal: boolean = false;
  showQue: boolean = false;
  @ViewChild("modal") modalControl: ElementRef;
  @ViewChildren("tab") elTabs: QueryList<ElementRef>;
  disableQue: boolean = false;

  loggedInPatient: Patient;

  showQues: boolean[] = [false , false , false ,false, false, false, false, false, false];

  constructor(
    private router: Router,
    private mainService: MainService,
    private http: HttpClient
  ) {}

  tabParentQuestions :string[] = [
    "Has the actual system successfully operated over full range of conditions in operational environment?",
    "Has the actual system successfully operated in limited operational environment?",
    "Has the actual system successfully operated in limited operational environment?",
    "Has the engineering/pilot-scale prototype been demonstrated in relevant environment?",
    "Has the laboratory scale prototype been validated in relevant environment? ",
    "Has the component / system been validated in lab?",
    "Has the proof of concept been demonstrated in a simulated environment?",
    "Has the equipment and process concept been formulated?",
    "Have the basic technology and principles been observed and reported?"
  ]


  questionsForTab1: string[] = [
    "Academic environment",
    "Some key process and safety requirements are identified",
    "Predictions of elements of technology capability validated by Analytical Studies",
    "Science known to extent that mathematical and/or computer models and simulations are possible",
    "Preliminary system performance characteristics and measures have been identified and estimated",
    "Predictions of elements of technology capability validated by Modeling and Simulation",
    "No system components, just basic laboratory research equipment to verify physical principles",
    "Laboratory experiments verify feasibility of application",
    "Predictions of elements of technology capability validated by Laboratory Experiments",
    "Customer representative identified to work with development team",
    "Customer participates in requirements generation",
    "Cross technology effects (if any) have begun to be identified",
    "Design techniques have been identified/developed",
    "Paper studies indicate that system components ought to work together",
    "Customer identifies transition window(s) of opportunity",
    "Performance Metrics for the system established",
    "Scaling studies have been started",
    "Current manufacturability concepts assessed",
    "Sources of key components for laboratory testing identified",
    "Scientific feasibility fully demonstrated",
    "Analysis of present state of the art shows that technology fills a need",
    "Risk areas identified in general terms",
    "Risk mitigation strategies identified",
    "Rudimentary best value analysis performed, not including cost factors",
    "The individual components have been tested at a laboratory scale"
  ];

  questionsForTab2: string[] = [
    "Academic environment",
    "Some key process and safety requirements are identified",
    "Predictions of elements of technology capability validated by Analytical Studies",
    "Science known to extent that mathematical and/or computer models and simulations are possible",
    "Preliminary system performance characteristics and measures have been identified and estimated",
    "Predictions of elements of technology capability validated by Modeling and Simulation",
    "No system components, just basic laboratory research equipment to verify physical principles",
    "Laboratory experiments verify feasibility of application",
    "Predictions of elements of technology capability validated by Laboratory Experiments",
    "Customer representative identified to work with development team",
    "Customer participates in requirements generation",
    "Cross technology effects (if any) have begun to be identified",
    "Design techniques have been identified/developed",
    "Paper studies indicate that system components ought to work together",
    "Customer identifies transition window(s) of opportunity",
    "Performance Metrics for the system established",
    "Scaling studies have been started",
    "Current manufacturability concepts assessed",
    "Sources of key components for laboratory testing identified",
    "Scientific feasibility fully demonstrated",
    "Analysis of present state of the art shows that technology fills a need",
    "Risk areas identified in general terms",
    "Risk mitigation strategies identified",
    "Rudimentary best value analysis performed, not including cost factors",
    "The individual components have been tested at a laboratory scale"
  ];

  questionsForTab3: string[] = [
    "Academic environment",
    "Some key process and safety requirements are identified",
    "Predictions of elements of technology capability validated by Analytical Studies",
    "Science known to extent that mathematical and/or computer models and simulations are possible",
    "Preliminary system performance characteristics and measures have been identified and estimated",
    "Predictions of elements of technology capability validated by Modeling and Simulation",
    "No system components, just basic laboratory research equipment to verify physical principles",
    "Laboratory experiments verify feasibility of application",
    "Predictions of elements of technology capability validated by Laboratory Experiments",
    "Customer representative identified to work with development team",
    "Customer participates in requirements generation",
    "Cross technology effects (if any) have begun to be identified",
    "Design techniques have been identified/developed",
    "Paper studies indicate that system components ought to work together",
    "Customer identifies transition window(s) of opportunity",
    "Performance Metrics for the system established",
    "Scaling studies have been started",
    "Current manufacturability concepts assessed",
    "Sources of key components for laboratory testing identified",
    "Scientific feasibility fully demonstrated",
    "Analysis of present state of the art shows that technology fills a need",
    "Risk areas identified in general terms",
    "Risk mitigation strategies identified",
    "Rudimentary best value analysis performed, not including cost factors",
    "The individual components have been tested at a laboratory scale"
  ];

  questionsForTab4: string[] = [
    "Academic environment",
    "Some key process and safety requirements are identified",
    "Predictions of elements of technology capability validated by Analytical Studies",
    "Science known to extent that mathematical and/or computer models and simulations are possible",
    "Preliminary system performance characteristics and measures have been identified and estimated",
    "Predictions of elements of technology capability validated by Modeling and Simulation",
    "No system components, just basic laboratory research equipment to verify physical principles",
    "Laboratory experiments verify feasibility of application",
    "Predictions of elements of technology capability validated by Laboratory Experiments",
    "Customer representative identified to work with development team",
    "Customer participates in requirements generation",
    "Cross technology effects (if any) have begun to be identified",
    "Design techniques have been identified/developed",
    "Paper studies indicate that system components ought to work together",
    "Customer identifies transition window(s) of opportunity",
    "Performance Metrics for the system established",
    "Scaling studies have been started",
    "Current manufacturability concepts assessed",
    "Sources of key components for laboratory testing identified",
    "Scientific feasibility fully demonstrated",
    "Analysis of present state of the art shows that technology fills a need",
    "Risk areas identified in general terms",
    "Risk mitigation strategies identified",
    "Rudimentary best value analysis performed, not including cost factors",
    "The individual components have been tested at a laboratory scale"
  ];

  loopArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  ngOnInit(): void {
    this.loggedInPatient = this.mainService.getLoggedInUser();
  }

  selectTab(event, id: number) {
    this.tabId = id;
    this.isShow = false;
    if (id == 3) {
      this.isShow1 = false;
    }
    if (id == 4) {
      this.isShow2 = false;
    }
    if (id == 5){
      this.isShow3 = false;
    }
    if (id == 6){
      this.isShow4 = false;
    }
    if (id == 7){
      this.isShow5 = false;
    }
    if (id == 8){
      this.isShow6 = false;
    }
    if (id == 9){
      this.isShow7 = false;
    }


    this.elTabs.forEach((tab) =>
      tab.nativeElement.classList.remove("active-tab")
    );

    event.target.classList.add("active-tab");
  }
  addData(event) {
    this.dataQA[event.question] = [event.answer, event.file];
    console.log(this.dataQA);
    
  }
  submitData() {
    // send data to db
    this.showModal = true;
    console.log(this.showModal);
    console.log(this.dataQA);
    const qaDataObj = { surveyData: this.dataQA };
    // this.mainService.updatePatientByMobileNumber("333333" , qaDataObj);
    this.mainService.setHideShowScreeingPopOver(true);
    // this.modalControl.nativeElement.classList.remove("display-none");
    let userId = this.mainService.getLoggedInUser().mobileNumber;
    this.mainService.updatePatientByMobileNumber(userId, qaDataObj);
    this.sendPatientDataToSharePoint(this.loggedInPatient, this.dataQA);
  }

  sendPatientDataToSharePoint(patientDetails: Patient, dataQA) {
    let patientObj = this.formPatientObject(patientDetails, dataQA);
    // let requestHeaders: HttpHeaders = new HttpHeaders();

    let headers2 = {
      "content-type": "application/json",
      client_id: "ZUfVUZuKhaNoOq2wxtO9NkDEGCsa",
      client_secret: "UeUtzpx4rKTptJ85SRdMBK2wWr0b",
    };

    const pateintSharePointUrl = "https://mscha.mtec.mural-gehc.com/api/1.0.0/mtec/patient";
    //"https://muralapp.eastus.cloudapp.azure.com/api/1.0.0/mtec/patient";

    this.http
      .post(pateintSharePointUrl, patientObj, { headers: headers2 })
      .subscribe((response) => {
        console.log(response);
       });
  }

  formPatientObject(patientDetails: Patient, dataQA: any) {
    let qaDataArray = Object.keys(dataQA).map((question) => {
      return {
        id: "0",
        question: question,
        answer: dataQA[question] === true ? "Yes" : "No",
      };
    });

    let surveyScore = qaDataArray.reduce((score , qaObject) =>{
        if(qaObject.answer == "Yes")
          score = score+1;
        return score;
    },0)

    surveyScore = Math.round((surveyScore/28)*100);


    console.log("QA data array: ", qaDataArray);
    return {
      givenName: patientDetails.firstName,
      familyName: patientDetails.lastName,
      gender: patientDetails.sex,
      mobileNumber: patientDetails.mobileNumber,
      email: patientDetails.emailId,
      dateOfBirth: patientDetails.age,
      ssn: "123-45-6789",
      address: {
        location: patientDetails.patientLocation,
        city: patientDetails.city,
        state: patientDetails.state,
        zipCode: patientDetails.zipCode,
      },
      triageSurvey: [...qaDataArray],
      riskScore: surveyScore,
      emergencyContacts : [{
        name: patientDetails.fullName || "name",
        mobileNumber : patientDetails.familyMobileNumber || "number",
        relation : patientDetails.relation || "none"
      }]
    };
  }

  navigateBack() {
    // UNCOMMENT !!
    this.router.navigate(["/patient-home"]);
  }
  closeModal() {
    this.showModal = false;
  // UNCOMMENT !!
    this.router.navigate(["/patient-home"]);
  }

  ChangeVisiblity(e , tabId) {

    if (e.target.value == "Yes") {
      // this.showQue = true;
      this.showQues[tabId] = true;
      
    } else {
      // this.showQue = false;
      this.showQues[tabId] = false;
      if(tabId != 9){
        this.tabId = tabId + 1;
        this.selectTab(tabId, this.tabId)
      }
    }
  }
}
