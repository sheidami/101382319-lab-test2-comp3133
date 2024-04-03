import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];
  launch_year: string = '';
  selectedMission: Mission | undefined;
  selectedFlightNumber: string | undefined;

  constructor (private spacexapi : SpacexapiService, private router: Router) {}



  ngOnInit(): void {
    this.spacexapi.getAllList()
      .subscribe( (missions) => {
        this.missions = missions;
      })
  }

  filterByLaunchYear(): void {
    this.spacexapi.getFilteredMissionsByYear(this.launch_year)
      .subscribe((missions) => {
        this.missions = missions;
        console.log(missions);
      })
  }
  
  closeMissionDetails(): void {
    this.selectedMission = undefined;
    this.selectedFlightNumber = undefined;
  }

  showMissionDetails(flightNumber: string): void {
    this.spacexapi.getMissionListDetailsByFlightNumber(flightNumber).subscribe(
      (data: Mission) => {
        this.selectedMission = data;
        this.selectedFlightNumber = flightNumber;
        this.router.navigate(['/missions', flightNumber]);
      },
      (error) => {
        console.log('Error:', error);
      }
    )
  }


}