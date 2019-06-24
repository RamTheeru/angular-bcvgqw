import { Injectable } from '@angular/core';
 import { Hero } from './hero';
@Injectable()
export class HeroServiceService {
singleHero : Hero;
  constructor() { }
 HEROES: Hero[] = [
  { id: 1, name: 'Robert Downey.Jr',
  desc : 
  `Anthony Edward "Tony" Stark is a character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name and known commonly by his alter ego, Iron Man.` ,
 imgpath : 'https://media3.mensxp.com/media/content/2018/Apr/tony-stark-quotes-proving-hes-the-coolest-avenger-1400x653-1522835488_1100x513.jpg'}
  // { id: 12, name: 'Narco' },
  // { id: 13, name: 'Bombasto' },
  // { id: 14, name: 'Celeritas' },
  // { id: 15, name: 'Magneta' },
  // { id: 16, name: 'RubberMan' },
  // { id: 17, name: 'Dynama' },
  // { id: 18, name: 'Dr IQ' },
  // { id: 19, name: 'Magma' },
  // { id: 20, name: 'Tornado' }
];

getHero(id:number){
  if(id===1)
  {
    id=id-1;
  }
  console.log(id);
 this.singleHero = this.HEROES[id];
 console.log(this.singleHero);
 this.singleHero.desc.replace("\n", "<br>");

 return this.singleHero;
}
}