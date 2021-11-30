import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-dislpay-team',
  templateUrl: './dislpay-team.component.html',
  styleUrls: ['./dislpay-team.component.css']
})
export class DislpayTeamComponent implements OnInit {

  id: any;
  team: any;
  constructor(private activatedRoute: ActivatedRoute,
    private teamService: TeamService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.getTeamById(this.id).subscribe(
      (data) => {
        this.team=data;
      }
    )
  }

}
