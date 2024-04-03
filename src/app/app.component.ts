import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101382319-lab-test2-comp3133';
  flight_number!: string;

  missionSelected(selectedMission: any) {
    this.flight_number = selectedMission.flight_number;
  }
}