import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../Services/team.service';
import { Team } from '../../Models/team.model'
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})

export class TeamDetailComponent implements OnInit {
  team: Team;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location ){}

  ngOnInit() {
    this.getTeam();

    }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("ID : " + id);
    this.teamService.getTeamByID(id)
      .subscribe(t => this.team = t);
    }

    save(): void {
      console.log(this.team);
      this.teamService.updateHero(this.team)
        .subscribe(() => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }

    deleteTeam(team: Team): void {
      if (confirm("Are you sure you want to delete team " + team.Name))
      {
        this.teamService.deleteTeam(team).subscribe(() => this.goBack());
      }
    }

  }
