import { Clinician } from 'src/app/interfaces/clinician';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/patient';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';

import { AngularFirestore } from '@angular/fire/firestore';


import { BehaviorSubject } from 'rxjs';
import { filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MainService { 
  selectedPatient : BehaviorSubject<any> = new BehaviorSubject<any>({});
  loggedInUser : any ;
  allPatients : Patient[];
  hideShowScreeingPopOver : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  allUsers : User[];
  allReviewers : User[];
  allClinicians : Clinician[] = [];
  constructor(private firestore: AngularFirestore ,
              private router : Router) { }

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }

  getPatient(patient: Patient) {
    return this.firestore.collection('patients').doc(patient.projectName).get();
  }
  

  getAllClinicians(){
    return this.firestore.collection('clinicians').snapshotChanges();
  }

  createPatient(patient: Patient){
    return this.firestore.collection('patients').doc(patient.projectName).set(patient);
  }

  getAllUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getUser(user: User) {
    return this.firestore.collection('users').doc(user.emailId).get();
  }

  createUser(user: User){
    return this.firestore.collection('users').doc(user.emailId).set(user);
  }

  updateUser(user: User){
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }

  updatePatient(patient: Patient){
    delete patient.id;
    this.firestore.doc('patients/' + patient.id).update(patient);
  }

  updatePatientByMobileNumber(mobileNum : string ,  QAData){
    return this.firestore.collection('patients').doc(mobileNum).update(QAData);
  }


  deletePatient(patientId: string){
    this.firestore.doc('patients/' + patientId).delete();
  }

  getAvailableClinicians(){
    // get request here.
    return null;
  }

  createClinician(clinician: Clinician){
    return this.firestore.collection('clinicians').doc(clinician.mobileNumber).set(clinician);
  }

  getSelectedPatient(){
    return this.selectedPatient;
  }

  setSelectedPatient(patient : Patient){
    this.selectedPatient.next(patient);
  }

  setLoggedInUser(user:Patient | Clinician){

    this.loggedInUser = user;
    console.log(this.loggedInUser);  
  }

  getLoggedInUser(){
    return this.loggedInUser;
  }

  getLastRoute(){
   return this.router.events
        .pipe(filter((event : any) =>  event instanceof NavigationEnd))
        .subscribe(data =>{
         
          console.log("*****" ,data);
          return data;
        })
  }

  storeAllUsers(users : User[]){
    this.allUsers = users;
  }

  storeAllReviewers(reviewers : User[]){
    this.allReviewers = reviewers;
  }

  storeAllClinicians(clinicians : Clinician[]){
    this.allClinicians = clinicians;
  }

  getAllStoredClinicians(){
    return this.allClinicians;
  }


  storeAllPatients(patients : Patient[]){
    this.allPatients = patients;
  } 
  getAllPatients(){
    return this.allPatients
  }

  getHideShowScreeingPopOver(){
    return this.hideShowScreeingPopOver;
  }

  
  setHideShowScreeingPopOver(val : boolean){
    this.hideShowScreeingPopOver.next(val);
  }
}
