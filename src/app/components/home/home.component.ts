import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  match: any;
  constructor() { }

  ngOnInit() {
    this.match = { id: 1, teamOne: 'real madrid', teamTwo: 'barcelona', scoreOne: 4, scoreTwo: 2 }
  }

}
