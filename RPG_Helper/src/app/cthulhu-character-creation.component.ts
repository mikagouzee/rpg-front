import { Component, Input, OnInit}      from '@angular/core';
import { ICaracteristic }               from './models/ICaracteristic';
import { IGame }                        from './models/IGame';
import { CharacterService }             from './services/character.service';

@Component({
    moduleId:module.id,
    selector:'cthulhu-creation',
    templateUrl: './templates/cthulhu-creation.component.html',
    providers: [CharacterService]
})


export class CthulhuCharacterCreationComponent implements OnInit {
    CharDTOBattr: ICaracteristic[];

    @Input()
    game:IGame;

    ngOnInit():void{
        this.CharDTOBattr = new Array<ICaracteristic>();
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
        this.CharDTOBattr.push(toBePush);
    }

    isRolled(battr:ICaracteristic):boolean{
        let isRolled:boolean=false;

        for(var icar of this.CharDTOBattr){
            if(icar.name == battr.name){
                console.log("We already rolled "+battr.name);
                isRolled = true;
            }
        }
        return isRolled;
    }


        create(characterName:string, playerName:string, game:IGame){
        alert("Creation ongoing from 'creation-component' for game " + game.name);
        this.characterService.createWithBattr(characterName, playerName, game, this.CharDTOBattr);
    }

}