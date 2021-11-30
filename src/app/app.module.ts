import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { NextComponent } from './components/next/next.component';
import { PubComponent } from './components/pub/pub.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultMatchComponent } from './components/result-match/result-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchTableComponent } from './components/match-table/match-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DislpayPlayerComponent } from './components/dislpay-player/dislpay-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DislpayTeamComponent } from './components/dislpay-team/dislpay-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RowDirective } from './directives/row.directive';
import { MyFilterPipe } from './pipes/my-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    WorldCupComponent,
    ResultComponent,
    NewsComponent,
    NextComponent,
    PubComponent,
    BlogComponent,
    FooterComponent,
    ResultMatchComponent,
    AdminComponent,
    MatchTableComponent,
    PlayerTableComponent,
    TeamTableComponent,
    DisplayMatchComponent,
    EditMatchComponent,
    DislpayPlayerComponent,
    EditPlayerComponent,
    DislpayTeamComponent,
    EditTeamComponent,
    RowDirective,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
