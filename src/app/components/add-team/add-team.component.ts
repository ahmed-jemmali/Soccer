import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team : any ={};
  addTeamForm : FormGroup;
  constructor(private formBuilder : FormBuilder,
    private teamService : TeamService,
    private router : Router) { }

  ngOnInit() {
    this.addTeamForm=this.formBuilder.group({
      name : [''],
      foundation : [''],
      stadium : [''],
    })
  }

  addTeam(){
    console.log('this is my team',this.team);
    this.teamService.addTeam(this.team).subscribe(
      ()=>{
        this.router.navigate(['admin']);
      }
    )
  }
}
