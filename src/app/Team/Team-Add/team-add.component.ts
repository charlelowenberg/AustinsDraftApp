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
     this.createTeam(team);
     this.router.navigate(['/team']);
  }

  createTeam(team: Team){
    this.teamService.createTeam(team).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
 }

 goBack(): void {
  this.location.back();
}

}
