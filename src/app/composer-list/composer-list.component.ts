/*
 Title: composer-list.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/10/2022
 Description:  Assignment 4.4 - Async Pipe (displays a list of composers)
 */


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms'
import { debounceTime } from 'rxjs';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  // create a composer property
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  // composers array
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val!));

  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
   this.composers = this.composerService.filterComposers(name)
 }


}
