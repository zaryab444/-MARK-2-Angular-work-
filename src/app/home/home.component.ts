import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import { LEADERS } from '../shared/leaders';

import { flyInOut, expand } from '../animations/app.animation';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess:string
  promotion: Promotion;
  //leader: Leader[];
leader: Leader[] = LEADERS;
  selectleader = LEADERS[3];

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL
    ) { }

  ngOnInit() {
    //.dish = this.dishservice.getFeaturedDish();
   //this.promotion = this.promotionservice.getFeaturedPromotion();
    //this.leader = this.leaderservice.getleader();

   this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
   this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader[4] = leader);
  }


}