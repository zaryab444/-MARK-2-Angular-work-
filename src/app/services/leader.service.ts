import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { promise } from 'protractor';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Observable <Leader[]> {
    
  //  return Promise.resolve(LEADERS);
 // return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
   //   setTimeout(() => resolve(LEADERS), 2000);
      return of(LEADERS).pipe(delay(2000));
  
}
getLeader(id: string): Observable <Leader> {
 // return Promise.resolve( LEADERS.filter((promo) => (promo.id === id))[3]);
// return new Promise(resolve=> {
  // Simulate server latency with 2 second delay
  //  setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);

  return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));

}

getFeaturedLeader(): Observable<Leader> {
  //return Promise.resolve (LEADERS.filter((leader) => leader.featured)[3]);
  //return  new Promise(resolve=> {
    // Simulate server latency with 2 second delay
    //  setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));

  
}
}









