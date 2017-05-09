import {Component, OnInit} from '@angular/core';
import {IGame } from './models/IGame';
import {Http} from '@angular/http';
import { GameService} from './services/game.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl: './templates/dashboard.component.html',
    providers: [GameService]
})

export class DashboardComponent implements OnInit{
    //games:string[];
    games:IGame[];
    selectedGame:string;

    ngOnInit():void{
        this.getGames();
    }   

    constructor(private http:Http,
                private router:Router,
                private gameService:GameService){};

    getGames():void{
        this.gameService.getGames()
            .then(games => this.games = games)
        }

    game_change():void{
        this.selectedGame=null;
    }
    
    checkState():void{
        console.log(JSON.stringify(this.selectedGame));
    }

    onChange(game:any){
        this.selectedGame = game;
    }


}