import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match: any = {};
  addMatchForm : FormGroup;
  constructor(private formBuilder : FormBuilder,
    private matchService : MatchService,
    private router : Router) { }

  ngOnInit() {
    this.addMatchForm=this.formBuilder.group({
      teamOne : [''],
      teamTwo : [''],
      scoreOne : [''],
      scoreTwo : [''],
    })
  }

  addMatch(){
    console.log('this is my match',this.match);
    this.matchService.addmatch(this.match).subscribe(
      ()=>{
        
        this.router.navigate([`admin`])
      }
    )
  }
}
