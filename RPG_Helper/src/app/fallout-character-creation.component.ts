import { Component, Input, OnInit}      from '@angular/core';
import { ICaracteristic }               from './models/ICaracteristic';
import { IGame }                        from './models/IGame';
import { CharacterService }             from './services/character.service';
import { ICareer }                      from './models/ICareer';

@Component({
    moduleId:module.id,
    selector:'fallout-creation',
    templateUrl: './templates/fallout-creation.component.html',
    providers: [CharacterService]
})


export class FalloutCharacterCreationComponent implements OnInit {
    @Input()
    game:IGame;

    CharDTOBattr: ICaracteristic[];
    career:ICareer;

    ngOnInit():void{
        this.CharDTOBattr = new Array<ICaracteristic>();
        this.career = this.game.professions[0];
    }

    constructor(private characterService:CharacterService){}

    AddOne(battr:ICaracteristic):void{
        if(battr.value < battr.max && this.checkCurrent()<31)
        battr.value += 1;
    }

    RemoveOne(battr:ICaracteristic):void{
        if(battr.value >0)
        battr.value -= 1;
        this.checkCurrent();
    }

    checkCurrent():number{
        var currentTotal = 0;
        for(let battr of this.game.BaseAttributes){
            currentTotal+=battr.value;
        }
        console.log(currentTotal);
        document.getElementById('remainingPoints').innerText = "Remaining Points : " + (30 - currentTotal);
        return currentTotal;
    }

    validate(battr:ICaracteristic):void{
        let alreadyAdd : boolean = false;
        for(let curBat of this.CharDTOBattr){
            if(curBat.name == battr.name){
                alert("You've already validate this attribute!");
                alreadyAdd = true;
            }
        }
        if(!alreadyAdd){
            this.CharDTOBattr.push(battr);
        }
    }

    create(characterName:string, playerName:string, game:IGame){

        let included:string = "";
        for(let alreadyIncluded of this.CharDTOBattr){
            included += alreadyIncluded.name;
            included += " , ";
        }

        if(this.CharDTOBattr.length < game.BaseAttributes.length){
            alert("You haven't validate all your points. You have validate : " + included );
        }    
        else{
            alert("Creation ongoing from 'creation-component' for game " + game.name 
            + " with base attributes : " + this.CharDTOBattr.toString());
            
            this.characterService.createWithBattr(characterName, playerName, game, this.career, this.CharDTOBattr);
        }
    }

    onChange(career:any){
        alert(career.name);
        this.career = career;
    }

}