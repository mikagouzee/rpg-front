import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';

import { DashboardComponent} from './dashboard.component';

import { CharacterComponent } from './character.component';
import { CharacterService } from './services/character.service';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterCreationComponent } from './character-creation.component';

import { FalloutCharacterCreationComponent } from './fallout-character-creation.component';
import { CthulhuCharacterCreationComponent }  from './cthulhu-character-creation.component';
import { FalloutCharacterEditComponent }  from './fallout-character-edit.component';
import { CthulhuCharacterEditComponent } from './cthulhu-character-edit.component';

import { SpendablePointViewComponent } from './viewcomponent/SpendablePointViewComponent';
import { SkillViewComponent } from './viewcomponent/SkillViewComponent';

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

    FalloutCharacterCreationComponent,
    CthulhuCharacterCreationComponent,
    FalloutCharacterEditComponent,
    CthulhuCharacterEditComponent,

    // SpendablePointViewComponent,
    // SkillViewComponent,

    DashboardComponent
   ],
   providers:[
     CharacterService
     ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 

}
