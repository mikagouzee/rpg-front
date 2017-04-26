import { Component, Input, OnInit }    from '@angular/core';
import { Character }            from '../models/character';
import { ICaracteristic }       from '../models/ICaracteristic';

@Component({
    moduleId:module.id,
    selector: 'my-character-skills',
    templateUrl : '../templates/skills-view-component.html',

})


export class SkillViewComponent implements OnInit{
    @Input()
    character: Character;

    @Input()
    _edit : boolean;

    startPoint: number;

    ngOnInit():void{
        if (this.character.gameName == "Call of Cthulhu")
            this. startPoint = this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value;
        else if (this.character.gameName == "Fallout")
            this.startPoint = this.character.spendPoints.find( i => i.name.toLowerCase() == "skill points").value;
        else
            this.startPoint = 0;
    }


    // increment_occupation_skill(skill:ICaracteristic):void{
    //     if(skill.value < skill.max && this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value > 0){
    //         skill.value++;
    //         this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value--;
    //     }
    // }

    //  decrement_occupation_skill(skill:ICaracteristic):void{
    //     if (skill.value > 1 && this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value < this.startPoint){
    //         skill.value--;
    //         this.character.spendPoints.find(i => i.name.toLowerCase() == "occupation skill points").value++;
    //     }
    // }


    // increment_personal_skill(skill:ICaracteristic):void{
    //     if(skill.value < skill.max && this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value > 0){
    //         skill.value++;
    //         this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value--;
    //     }
    // }

    // decrement_personal_skill(skill:ICaracteristic):void{
    //     if (skill.value > 1 && this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value < this.startPoint){
    //         skill.value--;
    //         this.character.spendPoints.find(i => i.name.toLowerCase() == "personal interest skill points").value++;
    //     }
    // }




    // isJobSkill():void{
    //     console.log("test");
    // }

}