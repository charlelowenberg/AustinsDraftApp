import { TeamColors } from '../Models/team-colors.model'

export class Team {
   constructor(
      public TeamID: number,
      public Name: string,
      public State: string,
      public City: string,
      public Owner: string,
      public Coach: string,
      public NumberOfSuperBowlTrophies: number
      // public teamColors: Array<TeamColors> = []
      ){  }
}
