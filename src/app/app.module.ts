import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/home.component';
import { TeamService } from './Services/team.service';
import { HttpClientModule } from '@angular/common/http';

import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './Team/team-detail/team-detail.component';
import { TeamAddComponent } from './Team/Team-Add/team-add.component';
import { PlayerAddComponent } from './Player/Player-Add/player-add.component';
import { PlayerDetailComponent } from './Player/Player-Detail/player-detail.component';
import { TeamHeaderComponent } from './header/team-header/team-header.component';
import { PlayerHeaderComponent } from './header/player-header/player-header.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team-detail/:id', component: TeamDetailComponent},
  { path: 'team-add', component: TeamAddComponent},
  { path: 'player-add', component: PlayerAddComponent},
  { path: 'player-detail/:id', component: PlayerDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamComponent,
    PlayerComponent,
    HomeComponent,
    TeamDetailComponent,
    TeamAddComponent,
    PlayerAddComponent,
    PlayerDetailComponent,
    TeamHeaderComponent,
    PlayerHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClientModule,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
