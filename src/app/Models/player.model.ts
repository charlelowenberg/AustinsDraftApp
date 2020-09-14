export class Player implements IPlayer{
  public playerId: number;
  public draftId: number;
  public name: string;
  public position: string;
  public college: string;
  public draft: string;

  constructor(name: string, position: string, college: string, draft: string){
    this.name = name;
    this.position = position;
    this.college = college;
    this.draft = draft;
  }
}
