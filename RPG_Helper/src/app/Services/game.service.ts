import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { IGame } from '../models/IGame';

@Injectable()
export class GameService{
    //URL FOR .NET API
    //private gamesUrl = 'http://localhost:58225/api/games/getAll';
    
    //URL FOR EXPRESS
    private gamesUrl = 'http://localhost:8000/games';

    constructor(private http:Http){}

    getGames():Promise<IGame[]>{
        console.log("Dashboard get games");
        return this.http.get(this.gamesUrl)
        .toPromise()
        .then(response => response.json() as IGame[]);
    }

    get(game:IGame):Promise<IGame>{
        const url = `http://localhost:58225/api/games/get/${game}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as IGame)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any>{
        console.error("Error in Game Service : ", error);
        return Promise.reject(error.message|| error);
    }

}