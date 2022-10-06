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
  enableSubmit: boolean = false;

  TRLTextArea: string = "";
  TRLFile: File;
  @ViewChild("modal") modalControl: ElementRef;
  @ViewChildren("tab") elTabs: QueryList<ElementRef>;
  disableQue: boolean = false;

  loggedInPatient: Patient;

  showQues: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor(
    private router: Router,
    private mainService: MainService,
    private http: HttpClient
  ) { }

  tabParentQuestions: string[] = [
    "Has the actual system successfully operated over full range of conditions in operational environment?",
    "Has the actual system successfully operated in limited operational environment?",
    "Has the actual system successfully operated in limited operational environment?",
    "Has the engineering/pilot-scale prototype been demonstrated in relevant environment?",
    "Has the laboratory scale prototype been validated in relevant environment? ",
    "Has the component / system been validated in lab?",
    "Has the proof of concept been demonstrated in a simulated environment?",
    "Has the equipment and process concept been formulated?",
    "Have the basic technology and principles been observed and reported?",
  ];

  questionsForTab9: string[] = [
    "Operational Concept has been implemented successfully",
    "Cost estimates <110% cost goals or meet cost goals (e.g., design to cost goals met)",
    "Affordability issues built into initial production and evolutionary acquisition milestones",
    "Design stable, few or no design changes",
    "System has been installed and deployed in intended weapon system platform",
    "Safety/Adverse effects issues have been identified and mitigated.",
    "Actual system fully demonstrated",
    "Training Plan has been implemented.",
    "Supportability Plan has been implemented.",
    "Program Protection Plan has been implemented.",
    "Actual mission system 'flight proven' through successful mission operations (OT&E completed)",
    "All manufacturing processes controlled to 6-sigma  or appropriate quality level",
    "Stable production",
    "All documentation completed",
  ];

  questionsForTab8: string[] = [
    "Components are form, fit, and function compatible with operational system",
    "Cost estimates < 125 % cost goals(e.g., design to cost goals met for LRIP)",
    "System is form, fit, and function design for intended application and weapon system platform",
    "Form, fit, and function demonstrated in eventual platform / weapon system",
    "Machines and tooling demonstrated in production environment",
    "Interface control process has been completed",
    "Most software user documentation completed and under configuration control",
    "Most training documentation completed and under configuration control",
    "Most maintenance documentation completed and under configuration control",
    "Final architecture diagrams have been submitted",
    "Manufacturing processes demonstrated by pilot line, LRIP, or similar item production",
    "Manufacturing processes demonstrate acceptable yield and producibility levels",
    "Software thoroughly debugged",
    "All functionality demonstrated in simulated operational environmenet",
    "Manufacturing process controlled to 4 - sigma or appropriate quality level",
    "All materials are in production and readily available",
    "System qualified through test and evaluation on actual platform(DT & E completed)",
    "Maintainability, reliability, and supportability data collection has been completed",
    "VV & A validation step completed, software works in real world",
    "DT & E completed, system meets specifications",
    "VV & A accreditation step completed, software authorized for use in intended weapon system",
    "Ready for Full Rate Production",
  ];

  questionsForTab7: string[] = [
    "Materials, processes, methods, and design techniques have been identified",
    "Materials and manufacturing process and procedures initially demonstrated",
    "M&S used to simulate some unavailable elements of system, but these instances are rare",
    "Prototype system built on 'soft' tooling",
    "Each system/software interface tested individually under stressed and anomolous conditions",
    "Algorithms run on processor(s) in operating environment",
    "VV&A in process with the verification step that software specifications are met completed",
    "Process tooling and inspection / test equipment demonstrated in production environment",
    "Machines and tooling proven",
    "Design changes decrease significantly",
    "Operational environment, but not the eventual platform, e.g., test-bed aircraft",
    "Maintainability, reliability, and supportability data is above 60% of total needed data",
    "Draft design drawings are complete.",
    "Materials, processes, methods, and design techniques are moderately developed and verified",
    "Scaling is complete.",
    "Pre-production hardware is available; quantities may be limited",
    "Components are representative of production components",
    "Design to cost goals validated",
    "Initial sigma levels established",
    "Manufacturing processes generally well understood",
    "Most software bugs removed",
    "Production planning is complete.",
    "Most functionality available for demonstration in simulated operational environment",
    "Operational/flight testing of laboratory system in representational environment",
    "Prototype improves to pre-production quality",
    "'Beta' version software has been released",
    "Fully integrated prototype demonstrated in actual or simulated operational environment",
    "System prototype successfully tested in a field environment.",
    "Ready for Low Rate Initial Production (LRIP)",
  ];

  questionsForTab6: string[] = [
    "Cross technology issue measurement and performance characteristic validations completed",
    "Quality and reliability levels established",
    "Frequent design changes occur",
    "Draft design drawings are nearly complete",
    "Operating environment for eventual system known",
    "Collection of actual maintainability, reliability, and supportability data has been started",
    "Design to cost goals identified",
    "Investment needs for process and tooling determined",
    "M&S used to simulate system performance in an operational environment",
    "Final Test & Evaluation Master Plan (TEMP)",
    "Factory acceptance testing of laboratory system in laboratory setting",
    "Representative model / prototype tested in high-fidelity lab / simulated operational environment",
    "Realistic environment outside the lab, but not the eventual operating environment",
    "Final Systems Engineering Master Plan (SEMP)",
    "Inventory of external interfaces completed",
    "Technology Transition Agreement has been updated",
    "Scaling issues that remain are identified and supporting analysis is complete",
    "Analysis of timing constraints completed",
    "Analysis of database structures and interfaces completed",
    "Have begun to establish an interface control process",
    "Draft production planning has been reviewed by end user and developer",
    "Critical manufacturing processes prototyped",
    "Most pre-production hardware is available",
    "Technology Transition Agreement has been coordinated and approved by end user",
    "Prototype implementation includes functionality to handle large scale realistic problems",
    "Algorithms parially integrated with existing hardware / software systems",
    "Materials, process, design, and integration methods have been employed",
    "Individual modules tested to verify that the module components (functions) work together",
    "Technology ”system” specification complete",
    "Components are functionally compatible with operational system",
    "Representative software system or prototype demonstrated in a laboratory environment",
    "Laboratory system is high-fidelity functional prototype of operational system",
    "Formal configuration management program defined to control change process",
    "Integration demonstrations have been completed",
    "Final Technical Report",
    "Production issues have been identified and major ones have been resolved",
    "Limited software documentation available",
    "Verification, Validation and Accreditation (VV&A) initiated",
    "Process and tooling are mature	",
    "Production demonstrations are complete",
    "'Alpha' version software has been released",
    "Engineering feasibility fully demonstrated",
    "Final Transition Plan with Business Case",
    "Acquisition program milestones established",
    "Value analysis includes business case",
    "Technical alternatives include 'do nothing case'",
    "Formal requirements document available",
  ];

  questionsForTab5: string[] = [
    "Cross technology effects (if any) identified and established through analysis",
    "Pre-production hardware available",
    "System interface requirements known",
    "System requirements flow down through work breakdown structure (systems engineering begins)",
    "System software architecture established",
    "Targets for improved yield established",
    "External interfaces described as to source, format, structure, content, and method of support",
    "Analysis of internal interface requirements completed",
    "Trade studies and lab experiments define key manufacturing processes",
    "Interfaces between components/subsystems are realistic (Breadboard with realistic interfaces)",
    "Significant engineering and design changes",
    "Coding of individual functions/modules completed ",
    "Prototypes have been created",
    "Tooling and machines demonstrated in lab",
    "High fidelity lab integration of system completed, ready for test in realistic/simulated environments",
    "Design techniques have been defined to the point where largest problems defined",
    "Form, fit, and function for application addressed in conjunction with end user development staff",
    "Fidelity of system mock-up improves from breadboard to brassboard",
    "Quality and reliability considered, but target levels not yet established",
    "Some special purpose components combined with available laboratory components",
    "Three view drawings and wiring diagrams have been submitted",
    "Laboratory environment modified to approximate operational environment",
    "Initial assesment of assembly needs performed",
    "Detailed design drawings have been completed",
    "Sigma levels needed to satisfy CAIV targets defined",
    "Draft SEMP addresses integration",
    "Draft SEMP addresses test and evaluation",
    "Draft SEMP addresses mechanical and electrical interfaces",
    "Production processes have been reviewed with Manufacturing and Producibility office(s)",
    "Draft SEMP addresses performance; translate measured to expected final performance",
    "Risk management plan documented",
    "Functions integrated into modules",
    "Configuration management plan in place",
    "Individual functions tested to verify that they work",
    "Individual modules and functions tested for bugs",
    "Integration of modules/functions demonstrated in a laboratory environment",
    "Formal inspection of all modules/components completed as part of configuration management",
    "Configuration management plan documented",
    "Draft Test & Evaluation Master Plan (TEMP)",
    "Algorithms run on processor with characteristics representative of target environment",
    "Preliminary hardware technology “system” engineering report (Draft SEMP) completed",
    "Customer commits to transition via POM process",
    "Draft Transition Plan with Business Case",
    "Failure Mode and Effects Analysis (FMEA) performed",
    "Value analysis includes analysis of multiple technology and non-material alternatives",
    "IPT develops requirements matrix with thresholds and objectives",
    "Physical work breakdown structure available",
    "Value analysis includes life-cycle cost analysis",
  ];

  questionsForTab4: string[] = [
    "Cross technology issues (if any) have been fully identified",
    "Ad hoc and available laboratory components are surrogates for system components",
    "Individual components tested in laboratory/by supplier (contractor's component acceptance testing)",
    "Piece parts and components in a pre-production form exist",
    "M&S used to simulate some components and interfaces between components",
    "Formal system architecture development begins",
    "Customer publishes requirements document",
    "Overall system requirements for end user's application are known",
    "System performance metrics have been established",
    "Analysis provides detailed knowledge of specific functions software needs to perform",
    "Laboratory requirements derived from system requirements are established",
    "Available components assembled into system breadboard",
    "Laboratory experiments with available components show that they work together (lab kludge)",
    "Requirements for each function established",
    "Algorithms converted to pseudocode",
    "Analysis of data requirements and formats completed",
    "Stand-alone modules follow preliminary system architecture plan",
    "Hardware in the loop/computer in the loop tools to establish component compatibility",
    "Designs verified through formal inspection process",
    "S&T exit criteria established",
    "Technology demonstrates basic functionality in simplified environment",
    "Able to estimate software program size in lines of code and/or function points",
    "Scalable technology prototypes have been produced",
    "Draft conceptual designs have been documented",
    "Design techniques identified/defined to where small applications may be analyzed/simulated",
    "Controlled laboratory environment",
    "Initial cost drivers identified",
    "Experiments with full scale problems and representative data sets",
    "Integration studies have been started",
    "CAIV targets set",
    "Individual functions or modules demonstrated in a laboratory environment",
    "Key manufacturing processes identified",
    "Scaling documents and diagrams of technology have been completed",
    "Some ad hoc integration of functions or modules demonstrates that they will work together",
    "Key manufacturing processes assessed in laboratory",
    "Draft Systems Engineering Master Plan (SEMP)",
    "Low fidelity technology “system” integration and engineering completed in a lab environment ",
    "Mitigation strategies identified to address manufacturability / producibility shortfalls",
    "Customer commits to transition through ATD commissioning and/or MOU",
    "Functional work breakdown structure developed",
    "Integrated Product Team (IPT) formally established with charter",
    "Customer representative is member of IPT",
    "Formal risk management program initiated",
    "Preliminary Failure Mode and Effects Analysis (FMEA) or Risk Waterfall analysis performed",
    "Technology availability dates established",
  ];

  questionsForTab3: string[] = [
    "Academic environment",
    "Predictions of elements of technology capability validated by Analytical Studies",
    "Analytical studies verify predictions, produce algorithms",
    "Science known to extent that mathematical and/or computer models and simulations are possible",
    "Preliminary system performance characteristics and measures have been identified and estimated",
    "Outline of software algorithms available",
    "Predictions of elements of technology capability validated by Modeling and Simulation",
    "Preliminary coding verifies that software can satisfy an operational need",
    "No system components, just basic laboratory research equipment to verify physical principles",
    "Laboratory experiments verify feasibility of application",
    "Predictions of elements of technology capability validated by Laboratory Experiments",
    "Customer representative identified to work with development team",
    "Customer participates in requirements generation",
    "Cross technology effects (if any) have begun to be identified",
    "Design techniques have been identified/developed ",
    "Paper studies indicate that system components ought to work together",
    "Customer identifies transition window(s) of opportunity",
    "Metrics established",
    "Scaling studies have been started",
    "Experiments carried out with small representative data sets",
    "Algorithms run on surrogate processor in a laboratory environment",
    "Current manufacturability concepts assessed",
    "Know what software is presently available that does similar task (100% = Inventory completed)",
    "Existing software examined for possible reuse",
    "Producibility needs for key breadboard components identified",
    "Know limitations of presently available software (Analysis of current software completed)",
    "Scientific feasibility fully demonstrated",
    "Analysis of present state of the art shows that technology fills a need",
    "Risk areas identified in general terms",
    "Risk mitigation strategies identified",
    "Rudimentary best value analysis performed, not including cost factors",
  ];

  questionsForTab2: string[] = [
    "Customer identified",
    "Potential system or component application(s) have been identified",
    "Paper studies show that application is feasible",
    "Know what program the technology will support",
    "An apparent theoretical or empirical design solution identified",
    "Basic elements of technology have been identified",
    "Desktop environment",
    "Components of technology have been partially characterized",
    "Performance predictions made for each element",
    "Customer expresses interest in application",
    "Some coding to confirm basic principles",
    "Initial analysis shows what major functions need to be done",
    "Modeling & Simulation only used to verify physical principles",
    "System architecture defined in terms of major functions to be performed",
    "Experiments performed with synthetic data",
    "Requirement tracking system defined to manage requirements creep",
    "Rigorous analytical studies confirm basic principles",
    "Analytical studies reported in scientific journals/conference proceedings/technical reports",
    "Individual parts of the technology work (No real attempt at integration)",
    "Know what hardware software will be hosted on",
    "Know what output devices are available",
    "Investment Strategy Sheet",
    "Know capabilities and limitations of researchers and research facilities",
    "Know what experiments you need to do (research approach)",
    "Qualitative idea of risk areas (cost, schedule, performance)",
    "Have rough idea of how to market technology (Who's interested, how will they find out about it?)",
  ];

  questionsForTab1: string[] = [
    "'Back of envelope' environment",
    "Physical laws and assumptions used in new technologies defined",
    "Have some concept in mind that may be realizable in software",
    "Know what software needs to do in general terms",
    "Paper studies confirm basic principles",
    "Mathematical formulations of concepts that might be realizable in software",
    "Have an idea that captures the basic principles of a possible algorithm",
    "Initial scientific observations reported in journals/conference proceedings/technical reports",
    "Basic scientific principles observed",
    "Know who cares about technology, e.g., sponsor, money source",
    "Research hypothesis formulated",
    "Know who will perform research and where it will be done",
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
    if (id == 5) {
      this.isShow3 = false;
    }
    if (id == 6) {
      this.isShow4 = false;
    }
    if (id == 7) {
      this.isShow5 = false;
    }
    if (id == 8) {
      this.isShow6 = false;
    }
    if (id == 9) {
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
  submitData(tID) {
    this.dataQA[this.tabParentQuestions[tID - 1]] = [
      true,
      this.TRLFile,
      this.TRLTextArea,
    ];
    if (tID != 9) {
      if (Object.keys(this.dataQA).length >= 2) {
        this.router.navigate(["/report-cleared"])
      }
      else{
        this.showModal = true;
      }
    }
    else {
      if (Object.keys(this.dataQA).length >= 2) {
        // this.router.navigate(["/report-cleared"])
        this.router.navigate(["/report-not-cleared"])
      }
      else{
        this.showModal = true;
      }
    }
    // console.log(Object.keys(this.dataQA).length);
    // console.log(Object.values(this.dataQA));
    // // send data to db
    // this.showModal = true;
    // console.log(this.showModal);
    // console.log(this.dataQA);
    // const qaDataObj = { surveyData: this.dataQA };
    // // this.mainService.updatePatientByMobileNumber("333333" , qaDataObj);
    // this.mainService.setHideShowScreeingPopOver(true);
    // // this.modalControl.nativeElement.classList.remove("display-none");
    // let userId = this.mainService.getLoggedInUser().mobileNumber;
    // this.mainService.updatePatientByMobileNumber(userId, qaDataObj);
    // // this.sendPatientDataToSharePoint(this.loggedInPatient, this.dataQA);
  }

  sendPatientDataToSharePoint(patientDetails: Patient, dataQA) {
    let patientObj = this.formPatientObject(patientDetails, dataQA);
    // let requestHeaders: HttpHeaders = new HttpHeaders();

    let headers2 = {
      "content-type": "application/json",
      client_id: "ZUfVUZuKhaNoOq2wxtO9NkDEGCsa",
      client_secret: "UeUtzpx4rKTptJ85SRdMBK2wWr0b",
    };

    const pateintSharePointUrl =
      "https://mscha.mtec.mural-gehc.com/api/1.0.0/mtec/patient";
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

    let surveyScore = qaDataArray.reduce((score, qaObject) => {
      if (qaObject.answer == "Yes") score = score + 1;
      return score;
    }, 0);

    surveyScore = Math.round((surveyScore / 28) * 100);

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
      emergencyContacts: [
        {
          name: patientDetails.fullName || "name",
          mobileNumber: patientDetails.familyMobileNumber || "number",
          relation: patientDetails.relation || "none",
        },
      ],
    };
  }

  navigateBack() {
    // UNCOMMENT !!
    this.router.navigate(["/user-home"]);
  }
  closeModal() {
    this.showModal = false;
    // UNCOMMENT !!
    // this.router.navigate(["/patient-screening"]);
  }

  ChangeVisiblity(e, tabId) {
    if (e.target.value == "Yes") {
      // this.showQue = true;
      this.showQues[tabId] = true;
      this.enableSubmit = true;
    } else {
      // this.showQue = false;
      this.showQues[tabId] = false;
      this.enableSubmit = false;
      if (tabId != 9) {
        this.tabId = tabId + 1;
        this.selectTab(tabId, this.tabId);
      }
    }
  }
}
