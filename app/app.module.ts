import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
// import { AboutComponent }  from './components/about.component';
import { AboutAppComponent }  from './components/aboutApp.component';
import { NavComponent }  from './components/nav.component';
import { HobbyComponent }  from './components/hobby.component';
import { EndUserComponent }  from './components/endUser.component';



import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent,
   // AboutComponent,
    NavComponent, AboutAppComponent,
  					HobbyComponent, EndUserComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
