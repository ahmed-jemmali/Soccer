import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: any = {};
  addPlayerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.addPlayerForm = this.formBuilder.group({
      name: [''],
      poste: [''],
      numero: [''],
      age: [''],
    })
  }

  addPlayer() {
    console.log('this is my player', this.player);
    this.playerService.addPlayer(this.player).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
