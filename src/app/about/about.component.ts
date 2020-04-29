import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { flyInOut, expand } from '../animations/app.animation';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {
  leader: Leader[] = LEADERS;
  selectleader = LEADERS[0];
  
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
  
    //this.leader = 
    this.leaderservice.getLeaders().subscribe(leader => this.leader = leader);

  }

}
