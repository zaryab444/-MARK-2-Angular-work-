import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleader():  Leader[] {
    
    return LEADERS;
 
   
}
getPromotion(id: string): Leader {
  return LEADERS.filter((promo) => (promo.id === id))[3];
}

getFeaturedPromotion(): Leader {
  return LEADERS.filter((promotion) => promotion.featured)[3];
}
}
