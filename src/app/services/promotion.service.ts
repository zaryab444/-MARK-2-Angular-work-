import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Observable<Promotion[]> {
    //return Promise.resolve(PROMOTIONS);
   // return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(PROMOTIONS), 2000);
      return of(PROMOTIONS).pipe(delay(2000));

  }

  getPromotion(id: string):Observable <Promotion> {
   // return Promise.resolve (PROMOTIONS.filter((promo) => (promo.id === id))[0]);
 //  return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
  //    setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
  return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));

  
  }

  getFeaturedPromotion(): Observable<Promotion> {
   // return Promise.resolve (PROMOTIONS.filter((promo) => promo.featured)[0]);
   //return  new Promise(resolve=> {
    // Simulate server latency with 2 second delay
     // setTimeout(() => resolve(PROMOTIONS.filter((promo) => promo.featured)[0]), 2000);
     return of(PROMOTIONS.filter((promo) => promo.featured)[0]).pipe(delay(2000));

  
  }
}




