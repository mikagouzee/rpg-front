import { Component, Input, OnInit }    from '@angular/core';
import { Character }            from './character';
import { ICaracteristic }       from './ICaracteristic';

@Component({
    moduleId:module.id,
    selector: 'my-character-skills',
    templateUrl : 'skills-view-component.html',

})


export class SkillViewComponent implements OnInit{
    @Input()
    character: Character;

    @Input()
    _edit : boolean;

    startPoint: number;

    ngOnInit():void{
        this. startPoint = this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value;
    }


    increment_occupation_skill(skill:ICaracteristic):void{
        if(skill.value < skill.max && this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value > 0){
            skill.value++;
            this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value--;
        }
    }

     decrement_occupation_skill(skill:ICaracteristic):void{
        if (skill.value > 1 && this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value < this.startPoint){
            skill.value--;
            this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value++;
        }
    }


    increment_personal_skill(skill:ICaracteristic):void{
        if(skill.value < skill.max && this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value > 0){
            skill.value++;
            this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value--;
        }
    }

    decrement_personal_skill(skill:ICaracteristic):void{
        if (skill.value > 1 && this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value < this.startPoint){
            skill.value--;
            this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value++;
        }
    }

    isJobSkill(skill:ICaracteristic):boolean{
        let isJob:boolean = false;
        
        for(var icar of this.character.metier.jobSkills){
            if(icar.name == skill.name){
                console.log("skill "+skill.name);
                isJob = true;
            }
        }

        return isJob;
    }


    // isJobSkill():void{
    //     console.log("test");
    // }

}