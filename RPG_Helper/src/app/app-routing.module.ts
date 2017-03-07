import { NgModule }     from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { CharacterComponent } from './character.component';
import { CharacterDetailComponent} from './character-detail.component';
import { CharacterEditComponent } from './character-edit.component';
import { CharacterCreationComponent} from './character-creation.component';

const routes: Routes= [
    {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'characters', component:CharacterComponent},
    {path:'characDetail/:characterName', component:CharacterDetailComponent},
   // {path:'createCharacter/:selectedGame', component:CharacterCreationComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}