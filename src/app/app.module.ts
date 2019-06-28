import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { AuthService } from './auth/auth.service';
import{AuthGuard}from './auth/auth-gaurd.service';
import {AuthModule} from './auth/auth.module';
import {CanDeactivateGuard} from './auth/can-deactivate-guard.service';

import {ShoppingListModule} from './shopping-list/shopping-list.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,HttpModule,SharedModule,FormsModule,ShoppingListModule,AuthModule ],
  declarations: [ AppComponent, HelloComponent,applyMyStyle, HeroesComponent, HeroDetailComponent, ServerComponent, ServersComponent, HeaderComponent, CockpitComponent, ServerElementComponent, UnlessDirective, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoggingService, HeroServiceService, ShoppingListService,RecipeService,DataStorageService, AuthService,AuthGuard,CanDeactivateGuard]
})
export class AppModule { }
