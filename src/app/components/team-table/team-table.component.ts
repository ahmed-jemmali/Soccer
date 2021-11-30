import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

  teams: any;
  constructor(private router: Router,
    private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data;
      }
    )
  }

  goToDisplay(x: any) {
    this.router.navigate([`displayTeam/${x}`]);
  }

  goToEdit(x: any) {
    this.router.navigate([`editTeam/${x}`]);
  }

  deleteTeam(x: any) {
    this.teamService.deleteTeam(x).subscribe(
      ()=>{
        console.log('match delete successfully');
        this.teamService.getAllTeams().subscribe(
          (data)=>{
            this.teams=data;
          }
        )
      }
    )
  }
}
