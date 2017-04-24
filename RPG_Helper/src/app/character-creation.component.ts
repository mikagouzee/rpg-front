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

    CharDTOBattr: ICaracteristic[];

    ngOnInit():void{
        this.CharDTOBattr = new Array<ICaracteristic>();
    }

    constructor(
        private characterService:CharacterService,
        private gameService:GameService,
        private route:ActivatedRoute,
    ){}






}