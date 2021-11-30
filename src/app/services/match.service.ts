import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl = 'api/matches';
  constructor(private httpClient: HttpClient) { }

  getAllMatches() {
    return this.httpClient.get(this.matchUrl);
  }

  getMatchById(id: any) {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }

  addmatch(match: any) {
    return this.httpClient.post(this.matchUrl, match);
  }

  updateMatch(match: any) {
    return this.httpClient.put(`${this.matchUrl}/${match.id}`, match);
  }

  deleteMatch(id: any){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }

  searchMatch(match:any){
    // return this.httpClient.get(`${this.matchUrl}/search/${id}`);
    return this.httpClient.post(`${this.matchUrl}/search/${match}`,match);
  }
}
