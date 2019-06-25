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
 imgpath : 'https://media3.mensxp.com/media/content/2018/Apr/tony-stark-quotes-proving-hes-the-coolest-avenger-1400x653-1522835488_1100x513.jpg'} ,
  { id: 2, name: 'Chris Hermsworth',
  desc : 
  `Thor is a 2011 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures.[N 1] It is the fourth film in the Marvel Cinematic Universe (MCU). As his brother Loki plots to take the Asgardian throne, Thor must prove himself worthy.` ,
 imgpath : 'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/11/Avengers-4-Thor-New-Trilogy-e1554473968463.jpg?q=50&fit=crop&w=798&h=407'} ,
   { id: 3, name: 'Mark Rafello',
  desc : 
  `Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise first portrayed by Edward Norton and currently by Mark Ruffalo, based on the Marvel Comics character of the same name and known commonly by his alter ego, the Hulk. The experiment failed, and now causes Banner to transform into a green, hulking beast whenever his heart rate goes above 200 bpm or if he is placed in mortal danger.` ,
 imgpath : 'https://cdn.images.express.co.uk/img/dynamic/36/750x445/997404.jpg'} 
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
    id=0;
  }
  else{
    id=id-1;
  }
  console.log(id);
 this.singleHero = this.HEROES[id];
 console.log(this.singleHero);
 this.singleHero.desc.replace("\n", "<br>");

 return this.singleHero;
}
}