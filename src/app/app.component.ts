/*
 Title: app.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/10/2022
 Description: Assignment 4.4 - Async Pipe - App component
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 4.4 - Async Pipe';
}
