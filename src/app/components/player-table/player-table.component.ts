import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  players: any = [];
  constructor(private router: Router,
    private playerService : PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        this.players=data;
      }
    )
  }

  goToDisplay(x: any) {
    this.router.navigate([`diplayPlayer/${x}`])
  }

  goToEdit(x:any){
    this.router.navigate([`editPlayer/${x}`]);
  }

  deletePlayer(x:any){
    this.playerService.deletePlayer(x).subscribe(
      ()=>{
        console.log('match delete successfully');
        this.playerService.getAllPlayers().subscribe(
          (data)=>{
            this.players=data;
          }
        )
      }
    )
  }

}
