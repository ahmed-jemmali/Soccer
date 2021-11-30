import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl = 'api/teams';
  constructor(private httpClient : HttpClient) { }

  getAllTeams(){
    return this.httpClient.get(this.teamUrl);
  }

  getTeamById(id:any){
    return this.httpClient.get(`${this.teamUrl}/${id}`);
  }

  addTeam(team:any){
    return this.httpClient.post(this.teamUrl,team);
  }

  updateTeam(team:any){
    return this.httpClient.put(`${this.teamUrl}/${team.id}`,team);
  }

  deleteTeam(id:any){
    return this.httpClient.delete(`${this.teamUrl}/${id}`);
  }

  searchTeam(team){
    return this.httpClient.post(`${this.teamUrl}/search/${team}`,team);
  }
}
