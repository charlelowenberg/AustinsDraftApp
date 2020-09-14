export class Draft implements IDraft{
  public draftId:  number;
  public collegeName: string;
  public roundPicked: Int16Array;
  public numberPicked: Int16Array;
  public collegePosition: string;
  public yearDrafted: Int16Array;

  constructor(collegeName: string, roundPicked: Int16Array, numberPicked: Int16Array, collegePosition: string,
                yearDrafted: Int16Array){
    this.collegeName = collegeName;
    this.roundPicked = roundPicked;
    this.numberPicked = numberPicked;
    this.collegePosition = collegePosition;
    this.yearDrafted = yearDrafted;
  }
}
