/*
 Title: composer.service.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/10/2022
 Description: Assignment 4.4 - Async Pipe
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { filter, Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

    // create a composer property
  composers: Array<IComposer>

  constructor() {


this.composers = [
      {
         composerId:100, fullName:"Tian Dun", genre:"Contemporary Classical"
      },
      {
         composerId:101, fullName:"Johann Sebastian Bach", genre:"Classical"
      },
      {
         composerId:102, fullName:"Antonio Vivaldi", genre:"Classical"
      },
      {
         composerId:103, fullName:"Joseph Haydn", genre:"Classical"
      },
      {
         composerId:104, fullName:"Wolfgang Amadeus Mozart", genre:"Classical"
       }
    ]

  }

   // Returns an observable array of composers
  // return 5 composers objects in sequence: of()
  getComposers(): Observable<IComposer[]> {
   return of(this.composers)
}

  getComposer(composerId: number) {
    // Loop over the composer array and return the object that matches the passed-in composerId
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name)>-1)))

  }


}

