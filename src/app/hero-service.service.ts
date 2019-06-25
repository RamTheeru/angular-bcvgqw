import { Injectable } from '@angular/core';
 import { Hero } from './hero';
@Injectable()
export class HeroServiceService {
singleHero : Hero;
  constructor() { }
 HEROES: Hero[] = [
  { id: 1, name: 'Tony Stark',
  desc : 
  `Anthony Edward "Tony" Stark is a character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name and known commonly by his alter ego, Iron Man.` ,
 imgpath : 'https://media3.mensxp.com/media/content/2018/Apr/tony-stark-quotes-proving-hes-the-coolest-avenger-1400x653-1522835488_1100x513.jpg'} ,
  { id: 2, name: 'Thor Odinson',
  desc : 
  `Thor is a 2011 American superhero film based on the Marvel Comics character of the same name, produced by Marvel Studios and distributed by Paramount Pictures.[N 1] It is the fourth film in the Marvel Cinematic Universe (MCU). As his brother Loki plots to take the Asgardian throne, Thor must prove himself worthy.` ,
 imgpath : 'https://static0.srcdn.com/wordpress/wp-content/uploads/2018/11/Avengers-4-Thor-New-Trilogy-e1554473968463.jpg?q=50&fit=crop&w=798&h=407'} ,
   { id: 3, name: 'Bruce Banner',
  desc : 
  `Bruce Banner is a character in the Marvel Cinematic Universe (MCU) film franchise first portrayed by Edward Norton and currently by Mark Ruffalo, based on the Marvel Comics character of the same name and known commonly by his alter ego, the Hulk.` ,
 imgpath : 'https://cdn.images.express.co.uk/img/dynamic/36/750x445/997404.jpg'} ,
   { id: 4, name: 'Steve Rogerss',
  desc : 
  `Captain America: The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the fifth film in the Marvel Cinematic Universe (MCU).` ,
 imgpath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLVMsP05rMxNYkKyghRlUNELExR3OamHvPFhLO3LOr4_DXjgk'}
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