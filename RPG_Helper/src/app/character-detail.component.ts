import {Component, Input, OnInit} from '@angular/core';
import { Router }   from '@angular/router';

import {CharacterService} from './character.service';
import {Character}      from './character';
import {ICaracteristic } from './ICaracteristic';

import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import 'rxjs/add/operator/switchMap'

@Component({
    moduleId:module.id,
    selector:'my-character-detail',
    templateUrl:'character-detail.component.html',
    providers:[CharacterService],
    
})


export class CharacterDetailComponent implements OnInit{
   @Input()
   character:Character;
   
   _edit: boolean;

   ngOnInit():void{
       this.route.params
            .switchMap((params:Params)=>this.characterService.getCharacter(params['characterName']))
            .subscribe(character => this.character = character);

        this._edit = false;
   }

   constructor( private characterService:CharacterService,
                private route:ActivatedRoute,
                private location: Location,
                private router:Router){}

    edit():void{
        this._edit = !this._edit;
        console.log(this._edit);
    }


    // seeJob():void{
    //     for(var icar of this.character.metier.jobSkills ){
    //         console.log(icar.name);
    //     }
    // }

}