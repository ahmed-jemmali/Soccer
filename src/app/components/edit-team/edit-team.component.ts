import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  id: any;
  team: any;
  addTeamForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.addTeamForm = this.formBuilder.group({
      name: [''],
      foundation: [''],
      stadium: [''],
    })

    this.teamService.getTeamById(this.id).subscribe(
      (data) => {
        this.team=data;
      }
    )
  }

  editTeam(){
    this.teamService.updateTeam(this.team).subscribe(
      ()=>{
        this.router.navigate(['admin']);
      }
    )
  }

}
