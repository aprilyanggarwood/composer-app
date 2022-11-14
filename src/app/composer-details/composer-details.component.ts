
/*
Title: composer - details.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/10/2022
 Description: Assignment 4.4 - Async Pipe - composer-detail component

*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

//# https://www.samjulien.com/how-to-use-route-parameters-in-angular
// https://github.com/gopinav/Angular-Tutorials/blob/master/routing-demo/src/app/department-detail/department-detail.component.ts
// https://github.com/angular/angular/blob/main/aio/content/examples/toh-pt6/src/app/hero-detail/hero-detail.component.ts

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // add field
  composerId: number;
  composer!: IComposer;

  // Access the values we pass to a route
  // pass in the activated route
  // access the URL parameters
  //Passes parameters to route
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!,10);

     // checks to see if composerId has a value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId)!;
    }
  }

  ngOnInit(): void {
  }

}
