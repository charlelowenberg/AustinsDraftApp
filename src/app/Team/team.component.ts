import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { TeamService } from '../Services/team.service';
import { Team } from '../Models/team.model'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
@Injectable()

export class TeamComponent implements OnInit{
  teams: Team[]
  public routerLinkVariable = "/app-team-detail"; // the value of the variable is string!

  constructor(private formBuilder: FormBuilder, private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(teams => {this.teams = teams; console.log(this.teams)});
  }
}
