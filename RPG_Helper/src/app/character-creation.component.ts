import { Component, OnInit,Input, AfterContentInit } from '@angular/core';
import { Character } from './models/character';
import { ICaracteristic } from './models/ICaracteristic';
import { CharacterService} from './services/character.service';

import { IGame }            from './models/IGame';
import { GameService }      from './services/game.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId:module.id,
    selector:'character-creation',
    templateUrl:'./templates/character-creation.component.html',
    providers:[CharacterService, GameService]

})

export class CharacterCreationComponent implements OnInit{
    @Input()
    game: IGame;

    ngOnInit():void{
        // this.route.params
        //     .switchMap((params:Params) => this.gameService.get(params['selectedGame']))
        //     .subscribe(game => this.game = game);
    }

    constructor(
        private characterService:CharacterService,
        private gameService:GameService,
        private route:ActivatedRoute,

    ){}

    create(characterName:string, playerName:string, game:IGame){
        alert("Creation ongoing from 'creation-component' for game " + game.name);
        this.characterService.create(characterName, playerName, game);
    }

}