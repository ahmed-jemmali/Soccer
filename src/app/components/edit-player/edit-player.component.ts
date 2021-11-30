import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id: any;
  player: any = {};
  addPlayerForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.addPlayerForm = this.formBuilder.group({
      name: [''],
      poste: [''],
      numero: [''],
      age: [''],
    })

    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        this.player=data;
      }
    )
  }

  editPlayer(){
    this.playerService.updatePlayer(this.player).subscribe(
      ()=>{
        this.router.navigate(['admin']);
      }
    )
  }

  
}
