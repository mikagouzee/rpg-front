import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';

import { DashboardComponent} from './dashboard.component';

import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterCreationComponent } from './character-creation.component';

import { SpendablePointViewComponent } from './SpendablePointViewComponent';
import { SkillViewComponent } from './SkillViewComponent';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
   ],
  declarations: [
    AppComponent,

    CharacterComponent,
    CharacterDetailComponent,
    CharacterCreationComponent,

    SpendablePointViewComponent,
    SkillViewComponent,

    DashboardComponent
   ],
   providers:[
     CharacterService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 

}
