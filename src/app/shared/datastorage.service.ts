import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Recipe} from '../recipes/recipe';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
constructor(private http:Http,private recpServ : RecipeService ){}
storeRecipes(){
return this.http.put('https://ng-recipe-book-2ef91.firebaseio.com/recipes.json',this.recpServ.getRecipes());
}
getStoredRecipes(){
  return this.http.get('https://ng-recipe-book-2ef91.firebaseio.com/recipes.json')
  .map(
    (response:Response)=>{
      const recps : Recipe[] = response.json(); 
      for(let recp of recps)
      {
        if(!recp['ingredients'])
        {
          recp['ingredients']=[];
        }
      }
      return recps;
    }
  ).subscribe(
    (recps : Recipe[])=>{ 
      this.recpServ.setRecipes(recps);
    }
  );
}
}