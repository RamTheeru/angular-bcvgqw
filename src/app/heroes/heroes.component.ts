import { Component, OnInit } from '@angular/core';
import {HeroServiceService} from '../hero-service.service';
import{Hero} from '../hero';
// import {HEROES}from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers :[HeroServiceService]
})
export class HeroesComponent implements OnInit {
// hero : Hero={
//    id: 0,
//     name: 'NO Hero selected'
// };
hero:Hero;
heros : Hero[] ;
  constructor(private heroServ : HeroServiceService) { }

  ngOnInit() {
    this.heros = this.heroServ.HEROES;
  }
selectthis(shero : Hero) {
  this.hero = this.heroServ.getHero(shero.id);
}
}