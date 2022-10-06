import { surveyQuestion } from './../../../interfaces/surveyQuestion';
import { Component, OnInit, Input, Output ,EventEmitter } from "@angular/core";


@Component({
  selector: "question2",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent2 implements OnInit {
  @Input() questionText: string;
  answer: boolean;
  @Input() fileID: File;
  enableCheckbox: boolean = false;
  fileID2: string = "";

  // @Output() answerEvent: EventEmitter<surveyQuestion> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    if(this.questionText == "Materials and manufacturing process and procedures initially demonstrated" || this.questionText ==  "Prototype system built on 'soft' tooling"){
      this.enableCheckbox = true;
    }
    else{
      this.enableCheckbox = false;
    }
    if(this.questionText == "Materials and manufacturing process and procedures initially demonstrated"){
      this.fileID2 = "Artifact1.jpeg  Artifact2.doc"
    }
    else{
      this.fileID2 = "Artifact3.xlsx  Artifact4.png"
    }
  }

  getAnswer() {
    // this.answerEvent.emit({ 
    //   question: this.questionText,
    //   answer : this.answer,
    //   file : this.fileID,
    //   comment: ""
    // });
  }

  
}
