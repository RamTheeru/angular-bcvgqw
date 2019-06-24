import { Injectable } from '@angular/core';
 import { Hero } from './hero';
@Injectable()
export class HeroServiceService {
singleHero : Hero;
  constructor() { }
 HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice',
  desc : 
  `Anthony Edward "Tony" Stark is a character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name and known commonly by his alter ego, Iron Man. In the films, Stark is an industrialist, genius inventor, hero and former playboy who is CEO of Stark Industries. At the beginning of the series, he is a chief weapons manufacturer for the U.S. military, until he has a change of heart and redirects his technical knowledge into the creation of powered exoskeleton suits of armor which he uses to defend against those that would threaten peace around the world.\
    
 As of 2019, the character was one of the central figures of the MCU, having appeared in ten films of the series;[N 1] from his introduction in Iron Man, up to Avengers: Endgame. In 2015, the evolution of the character over the series was described as "the defining arc of the Marvel Cinematic Universe".[1] In 2018, it was argued that "no other character goes on as transformative a journey as Iron Man".[2]` ,
 imgpath : 'https://images.app.goo.gl/PthH8XHpZG5WLmiS9'}
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