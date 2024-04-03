import { Component, Input } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent {

  @Input() mission!: Mission;
  @Input() flightNumber!: string;
  missionDetails: any;

  constructor (
    private spacexapi : SpacexapiService) {}

    ngOnInit(): void {
      this.spacexapi.getMissionListDetailsByFlightNumber(this.flightNumber)
        .subscribe(
          (missionDetail) => {
            this.missionDetails = missionDetail;
            console.log(missionDetail);
          },
          (error) => {
            console.log('Error:', error);
          }
        );
    }
     
    goBack() {
      window.history.back();
    }
}