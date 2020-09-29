import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { PlayerService } from '../Services/player.service';
import { TeamService } from '../Services/team.service';
import { Player } from '../Models/player.model'
import { Team } from '../Models/team.model'


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: Player[];
  routerLinkVariable = "/app-team-detail"; // the value of the variable is string!
  teams: Team[];
  teamName;


  constructor(
    private playerService: PlayerService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }

  getPlayers(){
    this.playerService.getPlayers().subscribe(players => {this.players = players; console.log(this.players)});
  }

  getTeams(){
    console.log("GetTeams made it!");
    this.teamService.getTeams().subscribe(teams => {this.teams = teams; console.log(this.teams)});
  }

  logDropdownTeamName(id: number): void {
    console.log("IDasfasfasdf : " +id);
    this.teamName = this.teams.find((item: any) => item.id === +id).Name;
    console.log("ths f team = " +this.teamName);
  }

}
