import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray  } from '@angular/forms';
import { TeamService } from '../../Services/team.service';
import { Team } from '../../Models/team.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})

@Injectable()
export class TeamAddComponent implements OnInit {
  public teamForm: FormGroup;
  team: Team[];

  constructor(private formBuilder: FormBuilder, private teamService: TeamService,
      private router: Router,
      private location: Location) { }

      // stateList: Array<any> = [
      //   { name: 'Texas'},
      //   { name: 'New Mexico'},
      // ];
      stateList: Array<any> = [
        { name: "Alaska"},
        { name: "Alabama"},
        { name: "Arkansas"},
        { name: "American Samoa"},
        { name: "Arizona"},
        { name: "California"},
        { name: "Colorado"},
        { name: "Connecticut"},
        { name: "Delaware"},
        { name: "Florida"},
        { name: "Georgia"},
        { name: "Hawaii"},
        { name: "Iowa"},
        { name: "Idaho"},
        { name: "Illinois"},
        { name: "Indiana"},
        { name: "Kansas"},
        { name: "Kentucky"},
        { name: "Louisiana"},
        { name: "Massachusetts"},
        { name: "Maryland"},
        { name: "Maine"},
        { name: "Michigan"},
        { name: "Minnesota"},
        { name: "Missouri"},
        { name: "Mississippi"},
        { name: "Montana"},
        { name: "North Carolina"},
        { name: "North Dakota"},
        { name: "Nebraska"},
        { name: "New Hampshire"},
        { name: "New Jersey"},
        { name: "New Mexico"},
        { name: "Nevada"},
        { name: "New York"},
        { name: "Ohio"},
        { name: "Oklahoma"},
        { name: "Oregon"},
        { name: "Pennsylvania"},
        { name: "Puerto Rico"},
        { name: "Rhode Island"},
        { name: "South Carolina"},
        { name: "South Dakota"},
        { name: "Tennessee"},
        { name: "Texas"},
        { name: "Utah"},
        { name: "Virginia"},
        { name: "Virgin Islands"},
        { name: "Vermont"},
        { name: "Washington"},
        { name: "Wisconsin"},
        { name: "West Virginia"},
        { name: "Wyoming"} ]

      trophieList: Array<any> = [
        { number: 0},
        { number: 1},
        { number: 2},
        { number: 3},
        { number: 4},
        { number: 5},
        { number: 6},
        { number: 7},
        { number: 8},
        { number: 9},
        { number: 10},
      ];

  ngOnInit() {
    this.teamForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      State: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Owner: ['', [Validators.required]],
      Coach: ['', [Validators.required]],
      NumberOfSuperBowlTrophies: ['', [Validators.required]],
      TeamColors: ['', [Validators.required]]
    });
 }

  onSubmit()
  {
     const team = this.teamForm.value;
     console.log("State : " + team.State);
     this.createTeam(team);
  }

  createTeam(team: Team){
    this.teamService.createTeam(team).subscribe(() => this.goBack());
 }

 goBack(): void {
  this.location.back();
}

}
