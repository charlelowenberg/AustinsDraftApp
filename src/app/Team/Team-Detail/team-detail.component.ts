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
  current = "Colorado";

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location ){}
    name = "Arkansas";

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
      this.teamService.updateTeam(this.team)
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

    logDropdown(id: number): void {
      console.log("ID : " +id);
      const NAME = this.stateList.find((item: any) => item.id === +id).name;


    }

  }
