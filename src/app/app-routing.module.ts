import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // http://localhost:4200/ => home.component.html va s'afficher
  { path: "", component: HomeComponent },
  // http://localhost:4200/login => login.component.html va s'afficher
  { path: "login", component: LoginComponent },
  // http://localhost:4200/signup => signup.component.html va s'afficher
  { path: "signup", component: SignupComponent },
  // http://localhost:4200/matchForm => matchform.component.html va s'afficher
  { path: 'matchForm', component: MatchFormComponent },
  // http://localhost:4200/playerForm => playerForm.component.html va s'afficher
  { path: 'playerForm', component: PlayerFormComponent },
  // http://localhost:4200/addTeam => addTeam.component.html va s'afficher
  { path: 'addTeam', component: AddTeamComponent },
  // http://localhost:4200/editTeam => editTeam.component.html va s'afficher
  { path: 'editTeam', component: EditTeamComponent },
  // http://localhost:4200/allMatches => matches.component.html va s'afficher
  { path: "allMatches", component: MatchesComponent },
  { path: "allMatches/search", component: MatchesComponent },
  // http://localhost:4200/allPlayers => players.component.html va s'afficher
  { path: 'allPlayers', component: PlayersComponent },
  // http://localhost:4200/allTeams => teams.component.html va s'afficher
  { path: 'allTeams', component: TeamsComponent },
  // http://localhost:4200/admin => admin.component.html va s'afficher
  { path: 'admin', component: AdminComponent },
  // http://localhost:4200/matchInfo/:id => match-info.component.html va s'afficher
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  // http://localhost:4200/addMatch => match-form.component.html va s'afficher
  { path: "addMatch", component: MatchFormComponent },
  { path: "editMatch/:id", component: MatchFormComponent },
  // http://localhost:4200/playerInfo/:id => player-info.component.html va s'afficher
  { path: 'playerInfo/:id', component: PlayerInfoComponent },
  { path: 'editPlayer/:id', component: PlayerFormComponent },
  { path: 'addPlayer', component: PlayerFormComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'searchByTeam', component: SearchMatchComponent },
  { path: 'search', component: SearchWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
