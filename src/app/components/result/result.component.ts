import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() child: any;
  constructor() { }

  ngOnInit() {
  }

  color(x, y) {
    if (x > y) {
      return ['green', 'win'];
    } else if (x < y) {
      return ['yellow', 'loss'];
    } else {
      return ['blue', 'draw'];
    }
  }

}
