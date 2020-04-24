import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leader: Leader[] = LEADERS;
  selectleader = LEADERS[0];
  
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
  
    //this.leader = 
    this.leaderservice.getLeaders().then(leader => this.leader = leader);

  }

}
