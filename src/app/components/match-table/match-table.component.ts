import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit {

  matches: any;
  constructor(private router: Router,
    private matchService : MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        this.matches=data;
      }
    )
  }

  goToDisplay(x: any) {
    this.router.navigate([`displayMatch/${x}`]);
  }

  goToEdit(x:any){
    this.router.navigate([`editMatch/${x}`]);
  }

  deleteMatch(x:any){
    this.matchService.deleteMatch(x).subscribe(
      ()=>{
        console.log('match delete successfully');
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            this.matches=data;
          }
        )
      }
    )
  }
}
