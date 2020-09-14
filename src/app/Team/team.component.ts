import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray  } from '@angular/forms';
import { TeamService } from '../Services/team.service';
import { Team } from '../Models/team.model'



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

@Injectable()
export class TeamComponent implements OnInit {
  //public API = 'https://localhost:44399/api'
  //teamForm = new Team('', '', '', '', '', '', 5);
   public teamForm: FormGroup;
  // dataSaved = false;
  // massage = null;
  // employeeIdUpdate = null;
  teams: Team[];

  constructor(private formBuilder: FormBuilder, private teamService: TeamService)
  {


    }

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

      this.getTeams();
    }

    getTeams(){
      this.teamService.getTeams().subscribe(teams => {this.teams = teams; console.log(this.teams)});
    }

    onSubmit()
    {
       const team = this.teamForm.value;
       this.createTeam(team);
       this.teams.push(team);
    }

    createTeam(team: Team){
      this.teamService.createTeam(team).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
   }

   deleteTeam(team: Team): void {
    this.teams = this.teams.filter(h => h !== team);
    this.teamService.deleteTeam(team).subscribe();
  }
}
