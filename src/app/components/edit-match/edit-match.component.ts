import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  id: any;
  addMatchForm: FormGroup;
  match: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private formbuilder: FormBuilder,
    private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.addMatchForm = this.formbuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })

    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        this.match=data;
      }
    )
  }


  editMatch(){
    this.matchService.updateMatch(this.match).subscribe(
      ()=>{
        this.router.navigate([`admin`]);
      }
    )
  }
}
