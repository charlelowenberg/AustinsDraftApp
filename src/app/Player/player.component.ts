import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { Location } from '@angular/common';

import { PlayerService } from '../Services/player.service';
import { TeamService } from '../Services/team.service';
import { Player } from '../Models/player.model'
import { Team } from '../Models/team.model'
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  playersSorted: Player[] = [];
  routerLinkVariable = "/app-team-detail"; // the value of the variable is string!
  teams: Team[];
  teamName;
  public hideRuleContent:boolean[] = [];
  public buttonName:any = 'Expand'; //'Collapse';

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService,
    private location: Location
    ) {

    }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);

    this.players.forEach(function(part, index, theArray) {
      theArray[index].Order = index;
    });

    for (var i = 0, l = this.players.length; i < l; i++) {
      this.playerService.updatePlayer(this.players[i]).subscribe();
    }
 }

  goBack(): void {
    this.location.back();
  }

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
    this.teamName = this.teams.find((item: any) => item.id === +id).Name;
  }

  toggle(index) {
    this.hideRuleContent[index] = !this.hideRuleContent[index];
  }

}
