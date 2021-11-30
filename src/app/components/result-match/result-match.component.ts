import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-match',
  templateUrl: './result-match.component.html',
  styleUrls: ['./result-match.component.css']
})
export class ResultMatchComponent implements OnInit {

  matches: any;
  constructor() { }

  ngOnInit() {
    this.matches=[
      {id :1,teamOne:'real madrid',teamTwo :'barcelona' ,scoreOne : 4,scoreTwo :2},
      {id :2,teamOne:'bayern' ,teamTwo :'chelsea',scoreOne :8,scoreTwo :2},
      {id :3,teamOne :'ATM',teamTwo :'PSG',scoreOne :1,scoreTwo:1},
      {id :4,teamOne :'ATM',teamTwo :'real madrid ',scoreOne :1,scoreTwo:4},
    ]
  }

}
