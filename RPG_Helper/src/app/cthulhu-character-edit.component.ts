import { Component, Input, OnInit } from '@angular/core';

import { ICaracteristic }   from './models/ICaracteristic';
import { IGame } from './models/IGame';
import { Character } from './models/character';

import { CharacterService } from './services/character.service';

@Component({
    moduleId:module.id,
    selector:'cthulhu-edit',
    templateUrl:'./templates/cthulhu-edit.component.html',
    providers:[CharacterService]
})

export class CthulhuCharacterEditComponent implements OnInit{
    //properties
    @Input()
    mycharacter : Character;
    occupationSkillPoint : number;
    personalSkillPoint: number;
    skillFirstValue:ICaracteristic[];

    //onInit
    ngOnInit():void{
        this.skillFirstValue = new Array<ICaracteristic>();

        //get base skill point
        if(this.mycharacter != null){
            for(let sk of this.mycharacter.spendPoints){
                if(sk.name.toLowerCase() == "occupation skill points"){
                    this.occupationSkillPoint = sk.value;
                }
                else if(sk.name.toLowerCase() == "personal interest skill points"){
                    this.personalSkillPoint=sk.value;
                }
            }
        }

        //get base value of the skills
        for(let myskill of this.mycharacter.skills){
            let newSkill = myskill;
            this.skillFirstValue.push(newSkill);
        }
    }

    
    //constructor
    constructor(private characterService:CharacterService){}

    //methods
    validate():void{
        alert("You clicked on validate!");
    }  

    increment(skill:any):void{
        if(this.isJobSkill(skill)){            
            if(skill.value < skill.max && 
                this.occupationSkillPoint > 0){
                skill.value += 1;
                this.occupationSkillPoint -= 1;
            }
        }
        else{
            if(skill.value < skill.max &&
             this.personalSkillPoint > 0 ){
                skill.value += 1;
                this.personalSkillPoint -= 1;
            }
        }
    }

    decrement(skill:any):void{
        let toCheck = new ICaracteristic();
        toCheck = this.skillFirstValue.find(s => s.name == skill.name);

        if(this.isJobSkill(skill)){
            if(skill.value > 0 &&
                !(skill.value < toCheck.value) && 
                this.occupationSkillPoint < this.mycharacter.spendPoints.find(s => s.name.toLowerCase() == "occupation skill points").value){
                    skill.value -=1;
                    this.occupationSkillPoint +=1;
                }
        }
        else{
            if(skill.value > 0 &&
                this.personalSkillPoint < this.mycharacter.spendPoints.find(s => s.name.toLowerCase() == "personal interest skill points").value){
                    skill.value -= 1;
                    this.personalSkillPoint +=1;
                }
        }
    }

    isJobSkill(skill:any):Boolean{
        let isJob = false;
        for(let inJob of this.mycharacter.metier.jobSkills){
            if(inJob.name == skill.name){
                isJob=true;
                return isJob;
            }
        }
        return isJob;
    }

}