import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-dislpay-player',
  templateUrl: './dislpay-player.component.html',
  styleUrls: ['./dislpay-player.component.css']
})
export class DislpayPlayerComponent implements OnInit {

  player: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        this.player=data;
      }
    )
  }

}
