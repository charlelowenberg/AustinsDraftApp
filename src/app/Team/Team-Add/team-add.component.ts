import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { TeamService } from '../../Services/team.service';
import { Team } from '../../Models/team.model';
import { States, Trophies } from '../../Services/data.service'


@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})

@Injectable()
export class TeamAddComponent implements OnInit {
  public teamForm: FormGroup;
  team: Team[];
  states = States;
  trophies = Trophies;

  constructor(private formBuilder: FormBuilder, private teamService: TeamService,
      private location: Location) {
        this.teamForm = this.formBuilder.group({
          Name: [''],
          State: [''],
          City: [''],
          Owner: [''],
          Coach: [''],
          NumberOfSuperBowlTrophies: [''],
          TeamColors: ['']
        });

       }


  ngOnInit() {
 }

  onSubmit()
  {
     const team = this.teamForm.value;
     //console.log("State : " + team.State);
     this.createTeam(team);
  }

  createTeam(team: Team){
    this.teamService.createTeam(team).subscribe(() => this.goBack());
 }

 goBack(): void {
  this.location.back();
}

}
