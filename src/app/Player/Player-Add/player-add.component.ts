import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PlayerService } from '../../Services/player.service';
import { TeamService } from '../../Services/team.service';
import { Player } from '../../Models/player.model';
import { Team } from '../../Models/team.model';
import { HeightFeet, HeightInches, JerseyNumbers, Positions } from '../../Services/data.service'

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {
  playerForm: FormGroup;
  public player: Player[];
  jerseyNumbers = JerseyNumbers;
  public teams: Team[];
  positions = Positions;
  public htFeet = HeightFeet;
  public htInches = HeightInches;


  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router,
    private location: Location,
    private teamService: TeamService,) {
      this.playerForm = this.formBuilder.group({
        FirstName: [''],
        LastName: [''],
        TeamID: [''],
        JerseyNumber: [''],
        Weight: [''],
        Position: [''],
        College: [''],
        HeightFeet: [''],
        HeightInches: ['']
      });

     }

    ngOnInit() {

      this.getTeams();
}

getTeams(){
  console.log("GetTeams made it!");
  this.teamService.getTeams().subscribe(teams => {this.teams = teams; console.log(this.teams)});
}

   onSubmit()
   {
      const player = this.playerForm.value;
      console.log("TeameID1 : " + player.TeamID);
      this.createPlayer(player);
   }

   createPlayer(player: Player){
    console.log("Feet : " + player.HeightFeet);
    console.log("Inches : " + player.HeightInches);
    this.playerService.createPlayer(player).subscribe(() => this.goBack());
  }

  goBack(): void {
   this.location.back();
 }

}
