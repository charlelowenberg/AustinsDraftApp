import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { States, Trophies } from '../../Services/data.service';
import { TeamService } from '../../Services/team.service';
import { PlayerService } from '../../Services/player.service';
import { Team } from '../../Models/team.model';
import { Player } from '../../Models/player.model';
import { JerseyNumbers } from '../../Services/data.service'

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player: Player;
  public teams: Team[];
  jerseyNumbers = JerseyNumbers;

  constructor(
    private teamService: TeamService,
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlayer();
    this.getTeams();
  }

  getTeams(){
    console.log("GetTeams made it!");
    this.teamService.getTeams().subscribe(teams => {this.teams = teams; console.log(this.teams)});
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("ID : " + id);
    this.playerService.getPlayerByID(id)
      .subscribe(player => this.player = player);
    }

    save(): void {
      console.log(this.player);
      this.playerService.updatePlayer(this.player)
        .subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }

    deletePlayer(player: Player): void {
      if (confirm("Are you sure you want to delete team " + player.FirstName + " " + player.LastName))
      {
        this.playerService.deletePlayer(player).subscribe(() => this.goBack());
      }
    }
}
