import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faChevronRight, faUser, faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-reviewer-home',
  templateUrl: './reviewer-home.component.html',
  styleUrls: ['./reviewer-home.component.css']
})
export class ReviewerHomeComponent implements OnInit {

  faChevronRight = faChevronRight;
  faUser = faUser;
  faCog = faCog;
  pendingPatients : number;
  virtualWardPatients : number;
  userDetails : any ={};

  constructor(private mainService : MainService , private router :Router) { }

  ngOnInit() {    
    this.userDetails = this.mainService.getLoggedInUser();

    //this.pendingPatients = this.mainService.getAllUsers().filter(patient => patient.category ==="Pending").length;
    this.pendingPatients = 0;
    //this.virtualWardPatients = this.mainService.getAllUsers().filter(patient => patient.category ===  "Virtual Ward" ).length;
  }
  routeToViewScreenings(param: number){   
    //this.router.navigate(["/assessment"] , { queryParams: { id: param}})
    this.router.navigate(["/assessment"])
  }
}
