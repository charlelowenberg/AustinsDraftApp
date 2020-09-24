import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/home.component';
import {  TeamService } from './Services/team.service';
import { HttpClientModule } from '@angular/common/http';

import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './Team/team-detail/team-detail.component';
import { TeamAddComponent } from './Team/Team-Add/team-add.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team-detail/:id', component: TeamDetailComponent},
  { path: 'team-add', component: TeamAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamComponent,
    PlayerComponent,
    HomeComponent,
    TeamDetailComponent,
    TeamAddComponent
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
