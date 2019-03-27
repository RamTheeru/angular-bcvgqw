import { Component, OnInit } from '@angular/core';

import{Hero} from '../hero';
import {HEROES}from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// hero : Hero={
//    id: 0,
//     name: 'NO Hero selected'
// };
hero:Hero;
heros : Hero[] ;
  constructor() { }

  ngOnInit() {
    this.heros = HEROES;
  }
selectthis(shero : Hero) {
  this.hero = shero;
}
}