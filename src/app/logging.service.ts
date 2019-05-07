import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
OnAddserver(message: string){
  console.log(message);
}
  constructor() { }

}