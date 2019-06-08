import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Recipe} from '../recipes/recipe';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
constructor(private http:Http,private recpServ : RecipeService,private authServ : AuthService ){}
storeRecipes(){
  const token = this.authServ.getToken();
return this.http.put('https://ng-recipe-book-2ef91.firebaseio.com/recipes.json?auth='+token,this.recpServ.getRecipes());
}
getStoredRecipes(){
  const token = this.authServ.getToken();
   this.http.get('https://ng-recipe-book-2ef91.firebaseio.com/recipes.json?auth='+token)
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