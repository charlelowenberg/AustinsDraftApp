import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ImagePath: string;


  constructor() {
    this.ImagePath = '../../assets/Images/FootballHelmet2.jpg'

  }

  ngOnInit(): void {
  }

}
