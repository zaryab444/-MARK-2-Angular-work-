import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Promise <Leader[]> {
    
  //  return Promise.resolve(LEADERS);
  return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS), 2000);
  });
 
   
}
getLeader(id: string): Promise <Leader> {
 // return Promise.resolve( LEADERS.filter((promo) => (promo.id === id))[3]);
 return new Promise(resolve=> {
  // Simulate server latency with 2 second delay
    setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
});

}

getFeaturedLeader(): Promise<Leader> {
  //return Promise.resolve (LEADERS.filter((leader) => leader.featured)[3]);
  return  new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
  });
}
}






