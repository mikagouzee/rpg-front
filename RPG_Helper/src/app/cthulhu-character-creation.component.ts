import { Component, Input, OnInit}      from '@angular/core';
import { ICaracteristic }               from './models/ICaracteristic';
import { IGame }                        from './models/IGame';
import { CharacterService }             from './services/character.service';
import { ICareer }                      from './models/ICareer';

@Component({
    moduleId:module.id,
    selector:'cthulhu-creation',
    templateUrl: './templates/cthulhu-creation.component.html',
    providers: [CharacterService]
})


export class CthulhuCharacterCreationComponent implements OnInit {
    CharDTOBattr: ICaracteristic[];
    career:ICareer;

    @Input()
    game:IGame;

    ngOnInit():void{
        this.CharDTOBattr = new Array<ICaracteristic>();
        this.career = this.game.professions[0];
    }

    constructor(private characterService:CharacterService){}

    onClickRoll(battr:ICaracteristic):void{
        var toBePush = new ICaracteristic();
        var randomVal = Math.floor(Math.random() * battr.max)+1;

        while(randomVal == 1){
            randomVal = Math.floor(Math.random() * battr.max)+1;
        }

        console.log("We will add "+battr.name+" to the array with val " + randomVal);
        toBePush.name = battr.name;
        toBePush.value = randomVal;
        battr.value = randomVal;
        this.CharDTOBattr.push(toBePush);
    }

    isRolled(battr:ICaracteristic):boolean{
        let isRolled:boolean=false;

        for(var icar of this.CharDTOBattr){
            if(icar.name == battr.name){
                isRolled = true;
            }
        }
        return isRolled;
    }

    create(characterName:string, playerName:string, game:IGame){
        alert("Creation ongoing from 'creation-component' for game " + game.name);
        this.characterService.createWithBattr(characterName, playerName, game,this.career, this.CharDTOBattr);
    }

    onChange(career:any){
        this.career=career;
    }

}