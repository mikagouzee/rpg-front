import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Character } from '../models/character';
import { Character_DTO } from '../models/character_DTO';
import { IGame } from '../models/IGame';
import { ICaracteristic } from '../models/ICaracteristic';
import { ICareer } from '../models/ICareer';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterService{
    private charactersUrl = 'http://localhost:58225/api/getAll';

    constructor(private http: Http){}
    
    getCharacters(): Promise<Character[]>{
        return this.http.get(this.charactersUrl)
            .toPromise()
            .then( (response => response.json() as Character[]) )
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message ||error);
    }

    getCharacter(characterName:string):Promise<Character>{
        console.log("character name received : ", characterName)
        const url = `http://localhost:58225/api/get/${characterName}`;
        console.log("url called : " , url);
        return this.http.get(url)
                .toPromise()
                .then(response => response.json() as Character)
                .catch(this.handleError);
    }


    
    create(characterName:string, playerName:string, game:IGame){
        const url = `http://localhost:58225/api/create/`;

        let myCharacter: Character_DTO = new Character_DTO();
        myCharacter.characterName = characterName;
        myCharacter.playerName=playerName;
        myCharacter.gameName = game.name;
        

        let headers = new Headers({headers: {'Content-Type': 'application/json'}});
        let options = new RequestOptions({headers:headers});

        console.log(JSON.stringify(myCharacter));

        return this.http.post(url, myCharacter, options)
                .map((res)=>{return res.json()})
                .toPromise()
                .catch(this.handleError);   
    }

    createWithBattr(characterName:string, playerName:string, game:IGame, career:ICareer, charDtoBattr:ICaracteristic[]){
        const url = `http://localhost:58225/api/create/`;

        let myCharacter: Character_DTO = new Character_DTO();
            myCharacter.characterName = characterName;
            myCharacter.playerName = playerName;
            myCharacter.gameName = game.name;
            myCharacter.baseAttr = charDtoBattr;
            myCharacter.metier = career;

        let headers = new Headers({headers: {'Content-Type': 'application/json'}});
        let options = new RequestOptions({headers:headers});

        console.log(JSON.stringify(myCharacter));

        return this.http.post(url, myCharacter, options)
            .map((res)=>{return res.json()})
            .toPromise()
            .catch(this.handleError);   
}

    update(aCharacter:Character){
        const url = 'http://localhost:58225/api/update';
        
        let headers = new Headers({headers: {'Content-Type': 'application/json'}});
        let options = new RequestOptions({headers:headers});
        console.log(aCharacter.baseAttr);
        return this.http.put(url, aCharacter, options)
                .map((res)=>{return res.json()})
                .toPromise()
                .catch(this.handleError);
    }


}