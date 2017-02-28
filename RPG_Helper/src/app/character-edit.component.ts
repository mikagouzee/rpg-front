import { Component, OnInit,Input, AfterContentInit } from '@angular/core';
import { Character } from './character';
import { ICaracteristic } from './ICaracteristic';
import { CharacterService} from './character.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId:module.id,
    selector:'character-edit',
    templateUrl:'./character-edit.component.html',
    providers:[CharacterService]

})

export class CharacterEditComponent implements OnInit{
    @Input()
    character : Character;

    starting_occupation_skill_point:number;

    ngOnInit():void{
        this.route.params
            .switchMap((params:Params) => this.characterService.getCharacter(params['characterName']))
            .subscribe(character => this.character = character);
    }

    ngAfterContentInit(){
        this.starting_occupation_skill_point = this.character.spendPoints.find(i => i.name == "occupation_skill_point").value;
    }

    constructor(
        private router:Router,
        private route:ActivatedRoute,
        private characterService: CharacterService
    ){}

    increment_occupation_skill(target: ICaracteristic){
        let skillPoint = this.character.spendPoints.find(i => i.name == "occupation_skill_points").value;

        if (skillPoint > 0 && target.value < target.max){
                skillPoint--;
                target.value++;
                this.character.spendPoints.find(i => i.name == "occupation_skill_points").value = skillPoint;
        }
    }

    decrement_occupation_skill(target:ICaracteristic){
        let skillPoint = this.character.spendPoints.find(i => i.name == "occupation_skill_points").value;

        if (skillPoint > 0 && skillPoint < this.starting_occupation_skill_point){
            if (target.value > 0){
                skillPoint++;
                target.value--;
                this.character.spendPoints.find(i => i.name == "occupation_skill_points").value = skillPoint;
            }
        }
    }

}