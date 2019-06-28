import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import{AuthGuard}from '../auth/auth-gaurd.service';
import {CanDeactivateGuard} from '../auth/can-deactivate-guard.service';

const recipeRoutes : Routes =[
  {path :'',component : RecipesComponent,
  children:[
     { path :'' ,component : RecipeStartComponent},
     {path : 'new',component: RecipeEditComponent ,canActivate:[AuthGuard]},
     {path : ':id',component: RecipeDetailComponent },
      
       {path : ':id/edit',component: RecipeEditComponent,canActivate:[AuthGuard],canDeactivate:[CanDeactivateGuard] }
  ]
  },
];

@NgModule({
  imports :[RouterModule.forChild(recipeRoutes)],
  exports :[RouterModule]
})
export class RecipesRoutingModule{

}