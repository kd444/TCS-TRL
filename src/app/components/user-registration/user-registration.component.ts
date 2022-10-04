import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { MainService } from "src/app/services/main.service";
import { User } from "src/app/interfaces/user";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"],
})
export class UserRegistrationComponent implements OnInit {
  options = "As User";

  users: User[];
  insertForm: FormGroup;
  showModal: boolean = false;
  nextClicked = false;
  consent: boolean = false;

  constructor(
    private mainService: MainService,
    private formBuilder: FormBuilder,
    public firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.insertForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      emailId: ["", Validators.required],
      password: ["", Validators.required],
      organizationName: ["", Validators.required],
      mobileNumber: ["",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      userType: ["User"]
    });
  }

  get formControls() {
    return this.insertForm.controls;
  }

  public onNextClick(): void {
    this.nextClicked = true;
  }

  public onPreviousClick(): void {
    this.nextClicked = false;
  }

  onSubmit() {
    this.mainService.createUser(this.insertForm.value).then((data) => {
      if (this.insertForm.invalid) {
        return;
      } else this.showModal = true;
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate(["/login"]);
  }

  changeConsent() {
    this.consent = !this.consent;
  }
}
