import { Component, Input, OnInit } from '@angular/core';

import {ICaracteristic} from './models/ICaracteristic';
import {IGame} from './models/IGame';
import {Character} from './models/character';

import {CharacterService} from './services/character.service';

@Component({
    moduleId:module.id,
    selector:'fallout-edit',
    templateUrl:'./templates/fallout-edit.component.html',
    providers:[CharacterService]

})

export class FalloutCharacterEditComponent implements OnInit{
    //properties
    @Input()
    mycharacter:Character;

    selectedSkills:ICaracteristic[];

    //onInit
    ngOnInit():void{
        this.selectedSkills = new Array<ICaracteristic>();
    }

    //constructor
    constructor(private characterService:CharacterService){}

    //methods
    select(skill:any):void{
            skill.value += 15;
            this.selectedSkills.push(skill);
    }

    isSelected(skill:ICaracteristic):Boolean{
        let isSelect = false;

        for(let aSkill of this.selectedSkills )
            if(aSkill.name == skill.name){
                isSelect = true;
            }
        return isSelect;
    }

    reset():void{
        for(let changedSkill of this.selectedSkills){
            changedSkill.value -= 15;
        }
        this.selectedSkills = new Array<ICaracteristic>();
    }
    
    validate():void{
        //TO DO : RECORD CHARACTER WITH CHARACTERSERVICE
        console.log("Validation ongoing");

        //this.characterService.update(this.mycharacter);
    }

}