import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl = 'api/players';
  constructor(private httpClient: HttpClient) { }

  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }

  getPlayerById(id: any) {
    return this.httpClient.get(`${this.playerUrl}/${id}`);
  }

  addPlayer(player: any) {
    return this.httpClient.post(this.playerUrl, player);
  }

  updatePlayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/${player.id}`, player);
  }

  deletePlayer(id: any){
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }

  searchPlayer(name){
    return this.httpClient.post(`${this.playerUrl}/search/${name}`,name);
  }
}
