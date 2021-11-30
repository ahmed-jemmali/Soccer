import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { DislpayPlayerComponent } from './components/dislpay-player/dislpay-player.component';
import { DislpayTeamComponent } from './components/dislpay-team/dislpay-team.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ResultMatchComponent } from './components/result-match/result-match.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: AddMatchComponent },
  { path: 'players', component: AddPlayerComponent },
  { path: 'teams', component: AddTeamComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: ResultMatchComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'displayMatch/:id', component: DisplayMatchComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'displayPlayer/:id', component: DislpayPlayerComponent },
  { path: 'editPlayer/:id', component: EditPlayerComponent },
  { path: 'displayTeam/:id', component: DislpayTeamComponent },
  { path: 'editTeam/:id', component: EditTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
