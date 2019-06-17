import {NgModule} from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

import {RecipesModule} from './recipes/recipe.module';

import { HomeComponent } from './home/home.component';

const appRoutes : Routes=[
   //{path :'',redirectTo : '/recipes',pathMatch :'full'},
{path :'',component : HomeComponent},
{path:'recipes',loadChildren:'./recipes/recipe.module#RecipesModule'},
   {path :'shopping-list',component : ShoppingListComponent}

];
@NgModule({
imports : [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
exports : [RouterModule]
})
export class AppRoutingModule {

}