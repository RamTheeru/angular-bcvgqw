import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {applyMyStyle} from './MyDirective';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import{Hero} from './hero';
import {HEROES}from './mock-heroes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoggingService } from './logging.service';
import { HeroServiceService } from './hero-service.service';
import { RecipeService } from './recipes/recipe.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,applyMyStyle, HeroesComponent, HeroDetailComponent, ServerComponent, ServersComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent, CockpitComponent, ServerElementComponent, UnlessDirective, DropdownDirective ],
  bootstrap:    [ AppComponent ],
  providers: [LoggingService, HeroServiceService, RecipeService]
})
export class AppModule { }
