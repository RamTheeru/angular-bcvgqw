import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RecipesModule} from './recipes/recipe.module';
import {SharedModule}from './shared/shared.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {HttpModule} from '@angular/http';
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
import {FormsModule} from '@angular/forms';


import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { UnlessDirective } from './unless.directive';

import { LoggingService } from './logging.service';
import { HeroServiceService } from './hero-service.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';

import {DataStorageService} from './shared/datastorage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import{AuthGuard}from './auth/auth-gaurd.service';

import {ShoppingListModule} from './shopping-list/shopping-list.module';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,HttpModule,RecipesModule,SharedModule,FormsModule,ShoppingListModule ],
  declarations: [ AppComponent, HelloComponent,applyMyStyle, HeroesComponent, HeroDetailComponent, ServerComponent, ServersComponent, HeaderComponent, CockpitComponent, ServerElementComponent, UnlessDirective,  SignupComponent, SigninComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoggingService, HeroServiceService, ShoppingListService,RecipeService,DataStorageService, AuthService,AuthGuard]
})
export class AppModule { }
