import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './Home/home.component';
import { TeamDetailComponent } from './Team/team-detail/team-detail.component';
import {  TeamService } from './Services/team.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamComponent,
    PlayerComponent,
    HomeComponent,
    TeamDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClientModule,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
